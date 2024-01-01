const User = require("../../models/User");
const { getActiveConnections } = require("../../serverStore");
const {
  getSocketServerInstance,
  getActiveRooms,
} = require("../../serverStore");

const updateRooms = async ({ toSpecifiedSocketId = null, userId }) => {
  const io = getSocketServerInstance();
  const activeRooms = getActiveRooms();
  if (toSpecifiedSocketId) {
    io.to(toSpecifiedSocketId).emit("active-room", { activeRooms });
  } else {
    const user = await User.findById(userId);
    user.friends.forEach((friend) => {
      const activeConnections = getActiveConnections(friend.toString());
      activeConnections.forEach((activeConnection) => {
        io.to(activeConnection).emit("active-room", { activeRooms });
      });
    });
  }
};

module.exports = {
  updateRooms,
};
