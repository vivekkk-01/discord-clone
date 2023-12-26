const connectedUsers = new Map();

let io = null;

const setSocketServerInstance = (ioInstance) => {
  io = ioInstance;
};

const getSocketServerInstance = () => {
  return io;
};

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

const getActiveConnections = (userId) => {
  const activeConnections = [];
  connectedUsers.forEach((key, value) => {
    if (key.userId === userId) {
      activeConnections.push(value);
    }
  });
  return activeConnections;
};

module.exports = {
  addNewConnectedUser,
  removeDisconnectedUser,
  getActiveConnections,
  setSocketServerInstance,
  getSocketServerInstance,
};
