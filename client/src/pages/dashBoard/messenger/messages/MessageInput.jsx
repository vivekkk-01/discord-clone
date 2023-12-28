import { styled } from "@mui/system";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { sendDirectMessage } from "../../../../communication/socketServer";

const MainContainer = styled("div")({
  height: "60px",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const Input = styled("input")({
  backgroundColor: "#2f3136",
  width: "98%",
  height: "50px",
  color: "white",
  border: "none",
  borderRadius: "8px",
  fontSize: "14px",
  padding: "0 10px",
});

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const { chosenChatDetails } = useSelector((state) => state.chat);

  const handleMessageInput = ({ target }) => {
    setMessage(target.value);
  };

  const handleKeyPressed = ({ key }) => {
    if (key === "Enter" && message.trim().length > 0) {
      handleSendMessage();
    }
  };

  const handleSendMessage = () => {
    sendDirectMessage({
      receiverUserId: chosenChatDetails._id,
      content: message,
    });
    setMessage("");
  };

  return (
    <MainContainer>
      <Input
        onChange={handleMessageInput}
        placeholder={`Write message to ${chosenChatDetails?.username}`}
        value={message}
        onKeyDown={handleKeyPressed}
      />
    </MainContainer>
  );
};

export default MessageInput;
