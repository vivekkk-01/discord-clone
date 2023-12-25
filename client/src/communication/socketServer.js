import io from "socket.io-client";

let socket = null;

export const connectWithSocketServer = (userDetails) => {
  socket = io("http://localhost:5000", {
    auth: {
      token: userDetails.token,
    },
  });

  socket.on("connect", () => {
    console.log("connected with server...", socket);
  });
};
