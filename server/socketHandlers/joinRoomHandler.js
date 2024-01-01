const { getActiveRoomDetails, joinActiveRoom } = require("../serverStore");
const { updateRooms } = require("./updates/rooms");

const joinRoomHandler = (socket, data) => {
  const socketId = socket.id;
  const userId = socket.user.id;
  const { roomId } = data;

  const participantDetails = {
    userId,
    socketId,
  };

  const activeRoomDetails = getActiveRoomDetails(roomId);

  joinActiveRoom(roomId, participantDetails);

  updateRooms({ userId: activeRoomDetails.roomCreator.userId });
};

module.exports = joinRoomHandler;
