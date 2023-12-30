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
  reducers: {},
});

export default roomSlice.reducer;
