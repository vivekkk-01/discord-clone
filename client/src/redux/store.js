import { combineReducers, configureStore } from "@reduxjs/toolkit";
import auth from "./slices/authSlice";
import alert from "./slices/alertSlice";
import errorAlert from "./slices/errorAlertSlice";
import friends from "./slices/friendsSlice";

const reducer = combineReducers({
  auth,
  alert,
  errorAlert,
  friends,
});

export default configureStore({ reducer });
