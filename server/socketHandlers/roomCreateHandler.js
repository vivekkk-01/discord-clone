const { addNewActiveRoom } = require("../serverStore");
const { updateRooms } = require("./updates/rooms");

const roomCreateHandler = (socket) => {
  const socketId = socket.id;
  const userId = socket.user.id;

  const roomDetails = addNewActiveRoom(userId, socketId);

  socket.emit("create-room", {
    roomDetails,
  });
  updateRooms({ userId });
};
module.exports = roomCreateHandler;
