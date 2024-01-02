const { addNewConnectedUser } = require("../serverStore");
const {
  updateFriendsAfterAccepting,
  updateFriendsPendingInvitations,
} = require("./updates/friends");
const { updateRooms } = require("./updates/rooms");

const newConnectionHandler = async (socket, io) => {
  const userDetails = socket.user;
  await updateRooms({ toSpecifiedSocketId: socket.id, userId: null });
  addNewConnectedUser({
    socketId: socket.id,
    userId: userDetails.id,
  });
  updateFriendsPendingInvitations(userDetails.id);
  updateFriendsAfterAccepting(userDetails.id);
};

module.exports = newConnectionHandler;
