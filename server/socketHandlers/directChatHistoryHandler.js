const Conversation = require("../models/Conversation");
const { updateChatHistory } = require("./updates/chat");

const directChatHistoryHandler = async (socket, data) => {
  const socketId = socket.id;
  const userId = socket.user.id;
  const { receiverUserId } = data;

  const conversation = await Conversation.findOne({
    participants: { $all: [userId, receiverUserId] },
  });

  updateChatHistory(conversation._id, socketId);
};

module.exports = directChatHistoryHandler;
