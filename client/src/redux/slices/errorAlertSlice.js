import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showErrorAlert: false,
  errorAlertContent: null,
};

const errorAlertSlice = createSlice({
  initialState,
  name: "errorAlert",
  reducers: {
    setErrorAlertOpen: (state, { payload }) => {
      state.showErrorAlert = true;
      state.errorAlertContent = payload;
    },
    setErrorAlertClose: (state) => {
      state.showErrorAlert = false;
      state.errorAlertContent = null;
    },
  },
});

export const { setErrorAlertOpen, setErrorAlertClose } = errorAlertSlice.actions;
export default errorAlertSlice.reducer;
