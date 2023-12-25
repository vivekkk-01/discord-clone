import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  friends: [],
  pendingFriendsInvitations: [],
  onlineFriends: [],
  error: null,
};

const friendsSlice = createSlice({
  initialState,
  name: "friends",
  reducers: {
    setFriends: (state, { payload }) => {
      state.error = null;
      state.friends = payload;
    },
    setPendingFriendsInvitations: (state, { payload }) => {
      state.error = null;
      state.pendingFriendsInvitations = payload;
    },
    setOnlineUsers: (state, { payload }) => {
      state.error = null;
      state.onlineUsers = payload;
    },
    setError: (state, { payload }) => {
      state.error = payload;
    },
  },
});

export const {
  setFriends,
  setPendingFriendsInvitations,
  setOnlineUsers,
  setError,
} = friendsSlice.actions;
export default friendsSlice.reducer;
