import { setMessagesAction } from "../../redux/actions/chatActions";
import store from "../../redux/store";

const updateChatHistoryIfActive = (data) => {
  const { participants, messages } = data;
  const receiverId = store.getState().chat.chosenChatDetails?._id;
  const userId = store.getState().auth.userDetails.id;
  if (receiverId && userId) {
    const userConversation = [receiverId, userId];
    updateChat({ userConversation, participants, messages });
  }
};

const updateChat = ({ userConversation, participants, messages }) => {
  const result = participants.every((participantId) => {
    return userConversation.includes(participantId);
  });

  if (result) {
    store.dispatch(setMessagesAction(messages));
  }
};

export default updateChatHistoryIfActive;
