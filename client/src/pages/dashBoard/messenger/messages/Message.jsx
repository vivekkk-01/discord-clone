import React from "react";
import { styled } from "@mui/system";
import Avatar from "../../../../shared/components/Avatar";
import { Typography } from "@mui/material";

const MainContainer = styled("div")({
  width: "97%",
  display: "flex",
  marginTop: "10px",
});

const AvatarContainer = styled("div")({
  width: "70px",
});

const MessageContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
});

const MessageContent = styled("div")({
  color: "#dcddde",
});

const SameAuthorMessageText = styled("span")({
  marginLeft: "70px",
});

const SameAuthorMessageContent = styled("span")({
  width: "97%",
  color: "#dcddde",
});

const Message = ({ sameAuthor, date, sameDay, message, content, username }) => {
  if (sameAuthor && sameDay) {
    return (
      <SameAuthorMessageContent>
        <SameAuthorMessageText>{content}</SameAuthorMessageText>
      </SameAuthorMessageContent>
    );
  }

  console.log(date, "Date");

  return (
    <MainContainer>
      <AvatarContainer>
        <Avatar username={username}></Avatar>
      </AvatarContainer>
      <MessageContainer>
        <Typography style={{ fontSize: "16px", color: "white" }}>
          {username}{" "}
          <span style={{ color: "#72767d", fontSize: "12px" }}>{date}</span>
        </Typography>
        <MessageContent>{content}</MessageContent>
      </MessageContainer>
    </MainContainer>
  );
};

export default Message;
