import { sendFriendRequest } from "../../api/friends";
import { setAlertOpen } from "../slices/alertSlice";
import { setError } from "../slices/friendsSlice";

export const sendFriendRequestAction =
  (requestData, closeDialogHandler) => async (dispatch) => {
    const { type, response } = await sendFriendRequest(requestData);
    if (type === "error") return setError(response);
    closeDialogHandler();
    dispatch(setAlertOpen("Invitation has been sent!"));
  };
