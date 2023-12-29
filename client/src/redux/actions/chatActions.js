import {
  setChatType,
  setChosenChatDetails,
  setMessages,
} from "../slices/chatSlice";

export const setChosenChatDetailsAction = (chosenChatDetails) => (dispatch) => {
  dispatch(setChosenChatDetails(chosenChatDetails));
};

export const setChatTypeAction = (chatType) => (dispatch) => {
  dispatch(setChatType(chatType));
};

export const setMessagesAction = (messages) => (dispatch) => {
  dispatch(setMessages(messages));
};
