const authSocket = require("./middlewares/authSocket");
const { setSocketServerInstance, getOnlineUsers } = require("./serverStore");
const directChatHistoryHandler = require("./socketHandlers/directChatHistoryHandler");
const directMessageHandler = require("./socketHandlers/directMessageHandler");
const disconnectHandler = require("./socketHandlers/disconnectHandler");
const newConnectionHandler = require("./socketHandlers/newConnectionHandler");
const roomCreateHandler = require("./socketHandlers/roomCreateHandler");

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

  const emitOnlineUsers = () => {
    const onlineUsers = getOnlineUsers();
    io.emit("online-users", { onlineUsers });
  };

  io.on("connection", (socket) => {
    newConnectionHandler(socket, io);
    emitOnlineUsers();

    socket.on("send-message", (data) => {
      directMessageHandler(socket, data);
    });

    socket.on("direct-chat-history", (data) => {
      directChatHistoryHandler(socket, data);
    });

    socket.on("create-room", () => {
      console.log("Creating room...");
      roomCreateHandler(socket);
    });

    socket.on("disconnect", () => {
      disconnectHandler(socket.id);
    });
  });

  setInterval(() => {
    emitOnlineUsers();
  }, [1000 * 8]);
};

module.exports = registerSocketServer;
