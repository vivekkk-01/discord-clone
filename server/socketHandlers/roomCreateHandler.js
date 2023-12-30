const { addNewActiveRoom } = require("../serverStore");

const roomCreateHandler = (socket) => {
  const socketId = socket.id;
  const userId = socket.user.id;

  const roomDetails = addNewActiveRoom(userId, socketId);

  socket.emit("create-room", {
    roomDetails,
  });
};
module.exports = roomCreateHandler;
