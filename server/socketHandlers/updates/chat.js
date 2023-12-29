const Conversation = require("../../models/Conversation");
const {
  getSocketServerInstance,
  getActiveConnections,
} = require("../../serverStore");
const crypto = require("crypto");

const updateChatHistory = async (
  conversationId,
  toSpecifiedSocketId = null
) => {
  const conversation = await Conversation.findById(conversationId).populate({
    path: "messages",
    model: "Message",
    populate: {
      path: "author",
      model: "User",
      select: "username",
    },
  });

  if (conversation) {
    const io = getSocketServerInstance();
    if (toSpecifiedSocketId) {
      const messages = conversation.messages.map((message) => {
        const decipher = crypto.createDecipheriv(
          process.env.ENCRYPTION_ALGORITHM,
          process.env.ENCRYPTION_KEY,
          Buffer.from(message.content.iv, "hex")
        );

        const decrypted = Buffer.concat([
          decipher.update(Buffer.from(message.content.encryptedMessage, "hex")),
          decipher.final(),
        ]);

        return { ...message._doc, content: decrypted.toString() };
      });
      io.to(toSpecifiedSocketId).emit("direct-chat-history", {
        messages,
        participants: conversation.participants,
      });
    }

    conversation.participants.forEach((userId) => {
      const activeConnections = getActiveConnections(userId.toString());
      activeConnections.forEach((socketId) => {
        const messages = conversation.messages.map((message) => {
          const decipher = crypto.createDecipheriv(
            process.env.ENCRYPTION_ALGORITHM,
            process.env.ENCRYPTION_KEY,
            Buffer.from(message.content.iv, "hex")
          );

          const decrypted = Buffer.concat([
            decipher.update(
              Buffer.from(message.content.encryptedMessage, "hex")
            ),
            decipher.final(),
          ]);

          return { ...message._doc, content: decrypted.toString() };
        });
        io.to(socketId).emit("direct-chat-history", {
          messages,
          participants: conversation.participants,
        });
      });
    });
  }
};

module.exports = {
  updateChatHistory,
};
