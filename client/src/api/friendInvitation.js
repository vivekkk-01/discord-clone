import axios from "axios";
const friendsClient = axios.create({
  baseURL: "http://localhost:5000/api/friend-invitation",
});

export const sendFriendRequest = async (requestData) => {
  const userDetails = JSON.parse(localStorage.getItem("discord-user"));
  try {
    const { data } = await friendsClient.post(
      "/invite",
      {
        requestData,
      },
      {
        headers: {
          Authorization: `Bearer ${userDetails.token}`,
        },
      }
    );
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
