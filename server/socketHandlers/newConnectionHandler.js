const { addNewConnectedUser } = require("../serverStore");
const {
  updateFriendsAfterAccepting,
  updateFriendsPendingInvitations,
} = require("./updates/friends");

const newConnectionHandler = (socket, io) => {
  const userDetails = socket.user;
  addNewConnectedUser({ socketId: socket.id, userId: userDetails.id });
  updateFriendsPendingInvitations(userDetails.id);
  updateFriendsAfterAccepting(userDetails.id);
};

module.exports = newConnectionHandler;
