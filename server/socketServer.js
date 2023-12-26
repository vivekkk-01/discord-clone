const authSocket = require("./middlewares/authSocket");
const { setSocketServerInstance } = require("./serverStore");
const disconnectHandler = require("./socketHandlers/disconnectHandler");
const newConnectionHandler = require("./socketHandlers/newConnectionHandler");

const registerSocketServer = (server) => {
  const socketIO = require("socket.io");
  const io = socketIO(server, {
    cors: {
      origin: "*",
      methods: ["POST", "GET"],
    },
  });
  io.use((socket, next) => {
    authSocket(socket, next);
  });
  setSocketServerInstance(io);
  io.on("connection", (socket) => {
    console.log("Connected to the socket:-", socket.id);

    newConnectionHandler(socket, io);

    socket.on("disconnect", () => {
      disconnectHandler(socket.id);
    });
  });
};

module.exports = registerSocketServer;
