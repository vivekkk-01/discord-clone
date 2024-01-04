const { addNewActiveRoom, getActiveRooms } = require("../serverStore");
const { updateRooms } = require("./updates/rooms");

const roomCreateHandler = async (socket) => {
  const socketId = socket.id;
  const userId = socket.user.id;
  const activeRooms = getActiveRooms();
  let canICreate = true;
  activeRooms.forEach((room) => {
    if (room.roomCreator.socketId === socketId) {
      canICreate = false;
    }
  });
  if (!canICreate) return;

  const roomDetails = await addNewActiveRoom(userId, socketId);
  socket.emit("create-room", {
    roomDetails,
  });
  await updateRooms({ userId });
};
module.exports = roomCreateHandler;
