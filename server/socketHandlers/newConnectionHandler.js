const User = require("../models/User");
const { addNewConnectedUser } = require("../serverStore");
const {
  updateFriendsAfterAccepting,
  updateFriendsPendingInvitations,
  updateFriendsList,
} = require("./updates/friends");
const { updateRooms } = require("./updates/rooms");

const newConnectionHandler = async (socket, io) => {
  const userDetails = socket.user;
  addNewConnectedUser({
    socketId: socket.id,
    userId: userDetails.id,
  });
  await updateFriendsList(socket, userDetails.id);
  updateFriendsPendingInvitations(userDetails.id);
  updateFriendsAfterAccepting(userDetails.id);
  await updateRooms({ toSpecifiedSocketId: socket.id, userId: null });
};

module.exports = newConnectionHandler;
