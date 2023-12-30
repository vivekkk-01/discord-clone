import { setOpenRoom } from "../slices/roomSlice";

export const openRoomAction =
  (isUserInRoom = false, isUserRoomCreator = false) =>
  (dispatch) => {
    dispatch(setOpenRoom({ isUserInRoom, isUserRoomCreator }));
  };
