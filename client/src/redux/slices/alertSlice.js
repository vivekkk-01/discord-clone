import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showAlert: false,
  alertContent: null,
};

const alertSlice = createSlice({
  initialState,
  name: "alert",
  reducers: {
    setAlertOpen: (state, { payload }) => {
      state.showAlert = true;
      state.alertContent = payload;
    },
    setAlertClose: (state) => {
      state.showAlert = false;
      state.alertContent = null;
    },
  },
});

export const { setAlertOpen, setAlertClose } = alertSlice.actions;
export default alertSlice.reducer;
