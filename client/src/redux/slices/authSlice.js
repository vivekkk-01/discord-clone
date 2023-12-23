import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userDetails: JSON.parse(localStorage.getItem("discord-user"))
    ? JSON.parse(localStorage.getItem("discord-user"))
    : null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  initialState,
  name: "auth",
  reducers: {
    setLoading: (state) => {
      state.loading = true;
    },
    setLogin: (state, { payload }) => {
      state.loading = false;
      state.userDetails = payload;
      state.error = null;
    },
    setRegister: (state, { payload }) => {
      state.loading = false;
      state.userDetails = payload;
      state.error = null;
    },
    setError: (state, { payload }) => {
      state.loading = false;
      state.userDetails = null;
      state.error = payload;
    },
    resetError: (state) => {
      state.loading = false;
      state.error = null;
    },
  },
});

export const { setLoading, setLogin, setRegister, setError, resetError } =
  authSlice.actions;
export default authSlice.reducer;
