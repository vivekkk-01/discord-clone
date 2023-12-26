const User = require("../../models/User");
const FriendInvitation = require("../../models/FriendInvitation");
const {
  getActiveConnections,
  getSocketServerInstance,
} = require("../../serverStore");

const updateFriendsPendingInvitations = async (userId) => {
  try {
    const pendingInvitations = await FriendInvitation.find({
      receiverId: userId,
    }).populate("senderId", "_id username email");

    const receiverList = getActiveConnections(userId);

    const io = getSocketServerInstance();

    receiverList.forEach((receiverSocketId) => {
      io.to(receiverSocketId).emit("friend-invitations", {
        pendingInvitations: pendingInvitations ? pendingInvitations : null,
      });
    });
  } catch (error) {
    console.log("Error:-", error);
  }
};

module.exports = { updateFriendsPendingInvitations };
