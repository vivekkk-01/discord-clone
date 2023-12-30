import { setOpenRoom, setRoomDetails } from "../slices/roomSlice";

export const openRoomAction =
  (isUserInRoom = false, isUserRoomCreator = false) =>
  (dispatch) => {
    dispatch(setOpenRoom({ isUserInRoom, isUserRoomCreator }));
  };

export const roomDetailsAction = (roomDetails) => (dispatch) => {
  dispatch(setRoomDetails(roomDetails));
};