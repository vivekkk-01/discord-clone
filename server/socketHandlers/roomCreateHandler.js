const { addNewActiveRoom } = require("../serverStore");
const { updateRooms } = require("./updates/rooms");

const roomCreateHandler = async (socket) => {
  const socketId = socket.id;
  const userId = socket.user.id;

  const roomDetails = await addNewActiveRoom(userId, socketId);
  socket.emit("create-room", {
    roomDetails,
  });
  await updateRooms({ userId });
};
module.exports = roomCreateHandler;
