import { combineReducers, configureStore } from "@reduxjs/toolkit";
import auth from "./slices/authSlice";
import alert from "./slices/alertSlice";

const reducer = combineReducers({
  auth,
  alert,
});

export default configureStore({ reducer });
