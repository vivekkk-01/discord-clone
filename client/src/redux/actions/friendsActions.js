import { sendFriendRequest } from "../../api/friendInvitation";
import { setAlertOpen } from "../slices/alertSlice";
import { setError, setPendingFriendsInvitations } from "../slices/friendsSlice";

export const sendFriendRequestAction =
  (requestData, closeDialogHandler) => async (dispatch) => {
    const { type, response } = await sendFriendRequest({ email: requestData });
    if (type === "error") return dispatch(setError(response.data));
    closeDialogHandler();
    dispatch(setAlertOpen("Invitation has been sent!"));
  };

export const pendingFriendInvitationsAction = (data) => (dispatch) => {
  dispatch(setPendingFriendsInvitations(data));
};
