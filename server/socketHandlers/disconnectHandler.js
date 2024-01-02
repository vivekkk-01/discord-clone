const { removeDisconnectedUser, getActiveRooms } = require("../serverStore");
const leaveRoomHandler = require("./leaveRoomHandler");

const disconnectHandler = (socket) => {
  const userId = socket.user.id;
  const activeRooms = getActiveRooms();
  activeRooms.forEach((activeRoom) => {
    const isUserInRoom = activeRoom.participants.some(
      (participant) => participant.userId === userId
    );
    if (isUserInRoom) {
      leaveRoomHandler(socket, { roomId: activeRoom.roomId });
    }
  });

  removeDisconnectedUser(socket.id);
};

module.exports = disconnectHandler;
