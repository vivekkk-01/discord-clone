import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  friends: [],
  pendingFriendsInvitations: [],
  onlineUsers: [],
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
    setAcceptOrRejectInvitation: (state, { payload }) => {
      state.pendingFriendsInvitations = state.pendingFriendsInvitations.filter(
        (invitation) => invitation.senderId.email !== payload
      );
    },
    setAcceptInvitation: (state, { payload }) => {
      state.friends = [...state.friends, payload];
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
  setAcceptOrRejectInvitation,
  setAcceptInvitation,
  setError,
} = friendsSlice.actions;
export default friendsSlice.reducer;
