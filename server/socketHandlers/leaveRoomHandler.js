const { getActiveRoomDetails, leaveActiveRoom } = require("../serverStore");
const { updateRooms } = require("./updates/rooms");

const leaveRoomHandler = async (socket, data) => {
  const userId = socket.user.id;
  const { roomId } = data;

  const activeRoom = getActiveRoomDetails(roomId);
  if (activeRoom) {
    leaveActiveRoom(roomId, userId);
    await updateRooms({ userId: activeRoom.roomCreator.userId });
  }
};

module.exports = leaveRoomHandler;
