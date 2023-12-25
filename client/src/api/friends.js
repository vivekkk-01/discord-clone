import axios from "axios";
const friendsClient = axios.create({
  baseURL: "http://localhost:5000/api/friends",
});

export const sendFriendRequest = async (requestData) => {
  try {
    const { data } = await friendsClient.post("/post-invitation");
    return {
      type: "success",
      response: data,
    };
  } catch (error) {
    const err = error?.response
      ? error.response
      : error.response?.data
      ? error.response.data
      : error?.data
      ? error.data
      : "Something went wrong, please try again!";
    return {
      type: "error",
      response: err,
    };
  }
};
