const { removeDisconnectedUser } = require("../serverStore");

const disconnectHandler = (socket) => {
  removeDisconnectedUser(socket);
};

module.exports = disconnectHandler;
