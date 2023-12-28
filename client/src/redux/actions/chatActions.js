import { setChatType, setChosenChatDetails } from "../slices/chatSlice";

export const setChosenChatDetailsAction = (chosenChatDetails) => (dispatch) => {
  dispatch(setChosenChatDetails(chosenChatDetails));
};

export const setChatTypeAction = (chatType) => (dispatch) => {
  dispatch(setChatType(chatType));
};
