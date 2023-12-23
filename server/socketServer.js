const registerSocketServer = (server) => {
  const socketIO = require("socket.io");
  const io = socketIO(server, {
    cors: {
      origin: "*",
      methods: ["POST", "GET"],
    },
  });
  io.on("connection", (socket) => {
    console.log("Connected to the socket:-", socket.id);
  });
};

module.exports = registerSocketServer;
