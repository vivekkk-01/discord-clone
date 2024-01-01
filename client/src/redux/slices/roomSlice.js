import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isUserInRoom: false,
  isUserRoomCreator: false,
  roomDetails: null,
  activeRooms: [],
  localStream: null,
  remoteStreams: [],
  audioOnly: false,
  screamSharingStream: null,
  isScreenSharingActive: false,
};

const roomSlice = createSlice({
  name: "room",
  initialState,
  reducers: {
    setOpenRoom: (state, { payload }) => {
      const { isUserRoomCreator, isUserInRoom } = payload;
      state.isUserInRoom = isUserInRoom;
      state.isUserRoomCreator = isUserRoomCreator;
    },
    setRoomDetails: (state, { payload }) => {
      state.roomDetails = payload;
    },
    setActiveRooms: (state, { payload }) => {
      state.activeRooms = payload;
    },
  },
});

export default roomSlice.reducer;

export const { setOpenRoom, setRoomDetails, setActiveRooms } =
  roomSlice.actions;
