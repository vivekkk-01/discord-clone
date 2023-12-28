import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  chatType: null,
  chosenChatDetails: null,
  messages: [],
  error: null,
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setChatType: (state, { payload }) => {
      state.chatType = payload;
    },
    setChosenChatDetails: (state, { payload }) => {
      state.chosenChatDetails = payload;
    },
    setMessages: (state, { payload }) => {
      state.messages = payload;
    },
  },
});

export const { setChatType, setChosenChatDetails, setMessages } =
  chatSlice.actions;
export default chatSlice.reducer;
