const Conversation = require("../../models/Conversation");
const {
  getSocketServerInstance,
  getActiveConnections,
} = require("../../serverStore");

const updateChatHistory = async (
  conversationId,
  toSpecifiedSocketId = null
) => {
  const conversation = Conversation(conversationId).populate({
    path: "messages",
    model: "Message",
    populate: {
      path: "author",
      model: "User",
      select: "username",
    },
  });

  if (!conversation) {
    const io = getSocketServerInstance();
    if (toSpecifiedSocketId) {
      io.to(toSpecifiedSocketId).emit("direct-chat-history", {
        messages: conversation.messages,
        participants: conversation.participants,
      });
    }

    conversation.participants.forEach((userId) => {
      const activeConnections = getActiveConnections(userId.toString());

      activeConnections.forEach((socketId) => {
        io.to(socketId).emit("direct-chat-history", {
          messages: conversation.messages,
          participants: conversation.participants,
        });
      });
    });
  }
};

module.exports = {
  updateChatHistory,
};
