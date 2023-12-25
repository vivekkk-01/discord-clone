const connectedUsers = new Map();

const addNewConnectedUser = ({ socketId, userId }) => {
  connectedUsers.set(socketId, { userId });
  console.log("Connected users:-", connectedUsers);
};

const removeDisconnectedUser = (socketId) => {
  console.log("Does it have:", connectedUsers, socketId);
  if (connectedUsers.has(socketId)) {
    console.log("Disconnected...");
    connectedUsers.delete(socketId);
  }
};

module.exports = { addNewConnectedUser, removeDisconnectedUser };
