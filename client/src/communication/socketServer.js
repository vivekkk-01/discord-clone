import io from "socket.io-client";
import store from "../redux/store";
import {
  friendAcceptedAction,
  onlineUsersAction,
  pendingFriendInvitationsAction,
} from "../redux/actions/friendsActions";
import updateChatHistoryIfActive from "../shared/utils/updateChatHistoryIfActive";
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
    store.dispatch(pendingFriendInvitationsAction(data.pendingInvitations));
  });
  socket.on("friend-accepted", (data) => {
    store.dispatch(friendAcceptedAction(data.friends));
  });
  socket.on("online-users", (data) => {
    store.dispatch(onlineUsersAction(data.onlineUsers));
  });
  socket.on("direct-chat-history", (data) => {
    updateChatHistoryIfActive(data);
  });
};

export const sendDirectMessage = (data) => {
  socket.emit("send-message", data);
};

export const chatDirectHistory = (data) => {
  socket?.emit("direct-chat-history", data);
};
