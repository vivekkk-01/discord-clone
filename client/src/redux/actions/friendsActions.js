import { sendFriendRequest } from "../../api/friends";
import { setAlertOpen } from "../slices/alertSlice";
import { setError, setPendingFriendsInvitations } from "../slices/friendsSlice";

export const sendFriendRequestAction =
  (requestData, closeDialogHandler) => async (dispatch) => {
    const { type, response } = await sendFriendRequest(requestData);
    if (type === "error") return setError(response);
    closeDialogHandler();
    dispatch(setAlertOpen("Invitation has been sent!"));
  };

export const pendingFriendInvitationsAction = (data) => (dispatch) => {
  dispatch(setPendingFriendsInvitations(data));
};
