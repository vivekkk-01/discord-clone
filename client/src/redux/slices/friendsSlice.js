import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  friends: [],
  pendingFriendsInvitations: [],
  onlineFriends: [],
};
const friendsSlice = createSlice({
  initialState,
  name: "friends",
  reducers: {
    setFriends: (state, { payload }) => {
      state.friends = payload;
    },
    setPendingFriendsInvitations: (state, { payload }) => {
      state.pendingFriendsInvitations = payload;
    },
    setOnlineUsers: (state, { payload }) => {
      state.onlineUsers = payload;
    },
  },
});

export const { setFriends, setPendingFriendsInvitations, setOnlineUsers } =
  friendsSlice.actions;
export default friendsSlice.reducer;
