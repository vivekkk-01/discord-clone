const User = require("./models/User");
const connectedUsers = new Map();
let activeRooms = [];
const { v4: uuidv4 } = require("uuid");

let io = null;

const setSocketServerInstance = (ioInstance) => {
  io = ioInstance;
};

const getSocketServerInstance = () => {
  return io;
};

const addNewConnectedUser = ({ socketId, userId }) => {
  connectedUsers.set(socketId, { userId });
};

const removeDisconnectedUser = (socketId) => {
  if (connectedUsers.has(socketId)) {
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

const getOnlineUsers = () => {
  const onlineUsers = [];
  connectedUsers.forEach((key, value) => {
    onlineUsers.push({ socketId: value, userId: key.userId });
  });
  return onlineUsers;
};

const addNewActiveRoom = async (userId, socketId) => {
  const user = await User.findById(userId).select("username");
  const { username, _id } = user;
  const newActiveRoom = {
    roomCreator: {
      userId: _id,
      username,
      socketId,
    },
    participants: [
      {
        userId,
        socketId,
      },
    ],
    roomId: uuidv4(),
  };
  activeRooms = [...activeRooms, newActiveRoom];
  return newActiveRoom;
};

const getActiveRooms = () => {
  return [...activeRooms];
};

module.exports = {
  addNewConnectedUser,
  removeDisconnectedUser,
  getActiveConnections,
  setSocketServerInstance,
  getSocketServerInstance,
  getOnlineUsers,
  addNewActiveRoom,
  getActiveRooms,
};
