import { login, register } from "../../api/auth";
import {
  setLogin,
  setRegister,
  setLoading,
  setError,
  resetError
} from "../slices/authSlice";

export const loginAction = (userDetails, navigate) => async (dispatch) => {
  dispatch(setLoading());
  const { type, response } = await login(userDetails);
  if (type === "error") return dispatch(setError(response));
  dispatch(setLogin(response));
  navigate("/dashboard");
};

export const registerAction = (userDetails, navigate) => async (dispatch) => {
  dispatch(setLoading());
  const { type, response } = await register(userDetails);
  if (type === "error") return dispatch(setError(response));
  dispatch(setRegister(response));
  navigate("/dashboard");
};

export const resetErrorAction = () => (dispatch) => {
  dispatch(resetError())
};
