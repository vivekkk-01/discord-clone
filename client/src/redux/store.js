import { combineReducers, configureStore } from "@reduxjs/toolkit";
import auth from "./slices/authSlice";
import alert from "./slices/alertSlice";
import errorAlert from "./slices/errorAlertSlice";
import friends from "./slices/friendsSlice";
import chat from "./slices/chatSlice";
import room from "./slices/roomSlice";

const reducer = combineReducers({
  auth,
  alert,
  errorAlert,
  friends,
  chat,
  room,
});

export default configureStore({ reducer });
