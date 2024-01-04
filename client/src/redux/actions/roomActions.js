import {
  setActiveRooms,
  setAudioOnly,
  setLocalStream,
  setOpenRoom,
  setRoomDetails,
} from "../slices/roomSlice";
import store from "../store";

export const openRoomAction =
  (isUserInRoom = false, isUserRoomCreator = false) =>
  (dispatch) => {
    dispatch(setOpenRoom({ isUserInRoom, isUserRoomCreator }));
  };

export const roomDetailsAction = (roomDetails) => (dispatch) => {
  dispatch(setRoomDetails(roomDetails));
};

export const activeRoomsAction = (activeRooms) => (dispatch) => {
  const userId = store.getState().auth.userDetails.id;
  const rooms = [];
  const roomIds = [];
  activeRooms.forEach((room) => {
    if (rooms.length === 0) {
      if (room.roomCreator.userId === userId) {
        return;
      } else {
        store.getState().friends.friends.forEach((friend) => {
          if (friend._id.toString() === room.roomCreator.userId.toString()) {
            rooms.push({ ...room });
            roomIds.push(room.roomId);
          }
        });
      }
    } else {
      if (roomIds.includes(room.roomId)) {
        return;
      } else {
        if (room.roomCreator.userId === userId) {
          return;
        } else {
          store.getState().friends.friends.forEach((friend) => {
            if (friend._id.toString() === room.roomCreator.userId.toString()) {
              rooms.push({ ...room });
              roomIds.push(room.roomId);
            }
          });
        }
      }
    }
  });
  dispatch(setActiveRooms(rooms));
};

export const setLocalStreamAction = (stream) => (dispatch) => {
  dispatch(setLocalStream(stream));
};

export const setAudioOnlyAction = (data) => (dispatch) => {
  dispatch(setAudioOnly(data));
};
