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
  },
});

export default roomSlice.reducer;

export const { setOpenRoom } = roomSlice.actions;
