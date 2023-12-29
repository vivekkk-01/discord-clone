const Conversation = require("../models/Conversation");
const Message = require("../models/Message");
const bcrypt = require("bcryptjs");
const { updateChatHistory } = require("./updates/chat");

const directMessageHandler = async (socket, data) => {
  const userId = socket.user.id;
  const { receiverUserId, content } = data;

  const encryptedMessage = await bcrypt.hash(content, 10);
  const message = await Message.create({
    content: encryptedMessage,
    author: userId,
    date: new Date(),
    type: "DIRECT",
  });

  const conversation = await Conversation.findOne({
    participants: { $all: [userId, receiverUserId] },
  });

  if (conversation) {
    conversation.messages.push(message._id);
    await conversation.save();
    updateChatHistory(conversation._id.toString());
  } else {
    await Conversation.create({
      participants: [userId, receiverUserId],
      messages: [message._id],
    });
    updateChatHistory(conversation._id.toString());
  }
};

module.exports = directMessageHandler;
