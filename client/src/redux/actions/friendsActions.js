import {
  acceptFriendRequest,
  rejectFriendRequest,
  sendFriendRequest,
} from "../../api/friendInvitation";
import { setAlertClose, setAlertOpen } from "../slices/alertSlice";
import {
  setErrorAlertClose,
  setErrorAlertOpen,
} from "../slices/errorAlertSlice";
import {
  setAcceptInvitation,
  setAcceptOrRejectInvitation,
  setError,
  setFriends,
  setOnlineUsers,
  setPendingFriendsInvitations,
} from "../slices/friendsSlice";

export const sendFriendRequestAction =
  (requestData, closeDialogHandler) => async (dispatch) => {
    const { type, response } = await sendFriendRequest({ email: requestData });
    if (type === "error") {
      dispatch(setErrorAlertOpen(response.data));
      setTimeout(() => {
        dispatch(setErrorAlertClose());
      }, 3000);
      return;
    }
    closeDialogHandler();
    dispatch(setAlertOpen("Invitation has been sent!"));
    setTimeout(() => {
      dispatch(setAlertClose());
    }, 3000);
  };

export const acceptFriendAction =
  ({ _id, email, username }) =>
  async (dispatch) => {
    const { type, response } = acceptFriendRequest({ email });
    if (type === "error") {
      dispatch(setErrorAlertOpen(response.data));
      setTimeout(() => {
        dispatch(setErrorAlertClose());
      }, 3000);
      return;
    }
    dispatch(setAlertOpen("Invitation accepted!"));
    setTimeout(() => {
      dispatch(setAlertClose());
    }, 3000);
    dispatch(setAcceptOrRejectInvitation(email));
    dispatch(setAcceptInvitation({ _id, email, username }));
  };

export const rejectFriendAction = (email) => async (dispatch) => {
  const { type, response } = rejectFriendRequest({ email });
  if (type === "error") {
    dispatch(setErrorAlertOpen(response.data));
    setTimeout(() => {
      dispatch(setErrorAlertClose());
    }, 3000);
    return;
  }
  dispatch(setAlertOpen("Invitation rejected!"));
  setTimeout(() => {
    dispatch(setAlertClose());
  }, 3000);
  dispatch(setAcceptOrRejectInvitation(email));
};

export const pendingFriendInvitationsAction = (data) => (dispatch) => {
  dispatch(setPendingFriendsInvitations(data));
};

export const friendAcceptedAction = (data) => (dispatch) => {
  dispatch(setFriends(data.friends));
};

export const setFriendsAction =
  ({ friends }) =>
  (dispatch) => {
    dispatch(setFriends(friends.friends));
  };

export const onlineUsersAction = (data) => (dispatch) => {
  dispatch(setOnlineUsers(data));
};
