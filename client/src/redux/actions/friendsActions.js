import {
  acceptFriendRequest,
  sendFriendRequest,
} from "../../api/friendInvitation";
import { setAlertClose, setAlertOpen } from "../slices/alertSlice";
import { setError, setPendingFriendsInvitations } from "../slices/friendsSlice";

export const sendFriendRequestAction =
  (requestData, closeDialogHandler) => async (dispatch) => {
    const { type, response } = await sendFriendRequest({ email: requestData });
    if (type === "error") return dispatch(setError(response.data));
    closeDialogHandler();
    dispatch(setAlertOpen("Invitation has been sent!"));
    setTimeout(() => {
      dispatch(setAlertClose());
    }, 3000);
  };

export const acceptFriendAction = (email) => async (dispatch) => {
  const { type, response } = acceptFriendRequest({ email });
  if (type === "error") return dispatch(setError(response.data));
  dispatch(setAlertOpen("Invitation accepted!"));
  setTimeout(() => {
    dispatch(setAlertClose());
  }, 3000);
};

export const pendingFriendInvitationsAction = (data) => (dispatch) => {
  dispatch(setPendingFriendsInvitations(data));
};
