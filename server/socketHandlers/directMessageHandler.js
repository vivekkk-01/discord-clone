const Conversation = require("../models/Conversation");
const Message = require("../models/Message");
const crypto = require("crypto");
const { updateChatHistory } = require("./updates/chat");

const directMessageHandler = async (socket, data) => {
  const userId = socket.user.id;
  const { receiverUserId, content } = data;

  const iv = crypto.randomBytes(16);

  const cipher = crypto.createCipheriv(
    process.env.ENCRYPTION_ALGORITHM,
    process.env.ENCRYPTION_KEY,
    iv
  );

  const encryptedMessage = Buffer.concat([
    cipher.update(content),
    cipher.final(),
  ]);

  const encrypted = {
    iv: iv.toString("hex"),
    encryptedMessage: encryptedMessage.toString("hex"),
  };

  const message = await Message.create({
    content: encrypted,
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
    const conversation = await Conversation.create({
      participants: [userId, receiverUserId],
      messages: [message._id],
    });
    updateChatHistory(conversation._id.toString());
  }
};

module.exports = directMessageHandler;
