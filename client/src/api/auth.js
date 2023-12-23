import axios from "axios";
const authClient = axios.create({ baseURL: "http://localhost:5000/api/auth" });

export const login = async (loginData) => {
  try {
    const { data } = await authClient.post("/login", loginData);
    return {
      type: "success",
      response: data,
    };
  } catch (error) {
    const err = error?.response?.data
      ? error?.response?.data
      : error?.message
      ? error?.message
      : error?.data
      ? error?.data
      : "Something went wrong, please try again";
    return {
      type: "error",
      response: err,
    };
  }
};

export const register = async (registerData) => {
  try {
    const { data } = await authClient.post("/register", registerData);
    return {
      type: "success",
      response: data,
    };
  } catch (error) {
    const err = error?.response?.data
      ? error?.response?.data
      : error?.message
      ? error?.message
      : error?.data
      ? error?.data
      : "Something went wrong, please try again";
    return {
      type: "error",
      response: err,
    };
  }
};
