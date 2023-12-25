import { combineReducers, configureStore } from "@reduxjs/toolkit";
import auth from "./slices/authSlice";
import alert from "./slices/alertSlice";
import errorAlert from "./slices/errorAlertSlice";

const reducer = combineReducers({
  auth,
  alert,
  errorAlert,
});

export default configureStore({ reducer });
