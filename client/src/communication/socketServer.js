import io from "socket.io-client";
import store from "../redux/store";
import { pendingFriendInvitationsAction } from "../redux/actions/friendsActions";
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

  socket.on("friend-invitations", (data) => {
    store.dispatch(pendingFriendInvitationsAction(data));
  });
};
