const { addNewConnectedUser } = require("../serverStore");

const newConnectionHandler = (socket, io) => {
  const userDetails = socket.user;
  addNewConnectedUser({ socketId: socket.id, userId: userDetails.id });
};

module.exports = newConnectionHandler;
