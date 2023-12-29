import React, { useEffect } from "react";
import { styled } from "@mui/system";
import Messages from "./messages/Messages";
import MessageInput from "./messages/MessageInput";
import { chatDirectHistory } from "../../../communication/socketServer";

const Wrapper = styled("div")({
  flexGrow: 1,
});

const MessengerContent = ({ chosenChatDetails }) => {
  useEffect(() => {
    chatDirectHistory({ receiverUserId: chosenChatDetails._id });
  }, [chosenChatDetails]);

  return (
    <Wrapper>
      <Messages />
      <MessageInput />
    </Wrapper>
  );
};

export default MessengerContent;
