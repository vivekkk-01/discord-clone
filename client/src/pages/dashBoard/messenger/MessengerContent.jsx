import React, { useEffect } from "react";
import { styled } from "@mui/system";
import Messages from "./messages/Messages";
import MessageInput from "./messages/MessageInput";

const Wrapper = styled("div")({
  flexGrow: 1,
});

const MessengerContent = ({ chosenChatDetails }) => {
  useEffect(() => {}, [chosenChatDetails]);

  return (
    <Wrapper>
      <Messages />
      <MessageInput />
    </Wrapper>
  );
};

export default MessengerContent;
