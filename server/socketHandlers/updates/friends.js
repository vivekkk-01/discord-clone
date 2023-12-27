const User = require("../../models/User");
const FriendInvitation = require("../../models/FriendInvitation");
const {
  getActiveConnections,
  getSocketServerInstance,
} = require("../../serverStore");

const updateFriendsPendingInvitations = async (userId) => {
  try {
    const receiverList = getActiveConnections(userId);
    if (receiverList.length > 0) {
      const pendingInvitations = await FriendInvitation.find({
        receiverId: userId,
      }).populate("senderId", "_id username email");

      const io = getSocketServerInstance();

      receiverList.forEach((receiverSocketId) => {
        io.to(receiverSocketId).emit("friend-invitations", {
          pendingInvitations: pendingInvitations ? pendingInvitations : null,
        });
      });
    }
  } catch (error) {
    console.log("Error:-", error);
  }
};

const updateFriendsAfterAccepting = async (userId) => {
  try {
    const receiverList = getActiveConnections(userId);
    if (receiverList.length > 0) {
      const friends = await User.findById(userId)
        .populate({ path: "friends", select: "_id email username" })
        .select("friends");

      const io = getSocketServerInstance();

      receiverList.forEach((receiverSocketId) => {
        io.to(receiverSocketId).emit("friend-accepted", {
          friends: friends ? friends : null,
        });
      });
    }
  } catch (error) {
    console.log("Error:-", error);
  }
};

module.exports = {
  updateFriendsPendingInvitations,
  updateFriendsAfterAccepting,
};
