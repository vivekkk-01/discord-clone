import {
  setActiveRooms,
  setOpenRoom,
  setRoomDetails,
} from "../slices/roomSlice";

export const openRoomAction =
  (isUserInRoom = false, isUserRoomCreator = false) =>
  (dispatch) => {
    dispatch(setOpenRoom({ isUserInRoom, isUserRoomCreator }));
  };

export const roomDetailsAction = (roomDetails) => (dispatch) => {
  dispatch(setRoomDetails(roomDetails));
};

export const activeRoomsAction = (activeRooms) => (dispatch) => {
  const rooms = [];
  const roomIds = [];
  activeRooms.forEach((room) => {
    if (rooms.length === 0) {
      rooms.push({ ...room });
      roomIds.push(room.roomId);
    } else {
      if (roomIds.includes(room.roomId)) {
        return;
      } else {
        rooms.push({ ...room });
      }
    }
  });
  dispatch(setActiveRooms(rooms));
};
