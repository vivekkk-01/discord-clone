const Conversation = require("../models/Conversation");
const Message = require("../models/Message");
const bcrypt = require("bcryptjs");

const directMessageHandler = async (socket, data) => {
  const userId = socket.user.id;
  const { receiverUserId, content } = data;

  const encryptedMessage = await bcrypt.hash(content, 10);
  const message = await Message.create({
    content: encryptedMessage,
    authorId: userId,
    date: new Date(),
    type: "DIRECT",
  });

  const conversation = await Conversation.findOne({
    participants: { $all: [userId, receiverUserId] },
  });

  if (conversation) {
    conversation.messages.push(message._id);
    await conversation.save();
  } else {
    await Conversation.create({
      participants: [userId, receiverUserId],
      messages: [message._id],
    });
  }
};

module.exports = directMessageHandler;
