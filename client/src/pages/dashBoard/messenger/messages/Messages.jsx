import React from "react";
import { styled } from "@mui/system";
import MessagesHeader from "./MessagesHeader";
import { useSelector } from "react-redux";
import Message from "./Message";

const MainContainer = styled("div")({
  height: "calc(100% - 60px)",
  overflow: "auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const DUMMY_MESSAGES = [
  {
    _id: 1,
    content: "hello",
    sameAuthor: "false",
    author: {
      username: "Marek",
    },
    date: "22/01/2022",
    sameDay: false,
  },
  {
    _id: 2,
    content: "hello once again",
    sameAuthor: "true",
    author: {
      username: "Marek",
    },
    date: "22/01/2022",
    sameDay: true,
  },
  {
    _id: 3,
    content: "hello third time",
    sameAuthor: "true",
    author: {
      username: "Marek",
    },
    date: "23/01/2022",
    sameDay: false,
  },
  {
    _id: 4,
    content: "hello response first time",
    sameAuthor: false,
    author: {
      username: "John",
    },
    date: "23/01/2022",
    sameDay: true,
  },
  {
    _id: 5,
    content: "hello response third time",
    sameAuthor: true,
    author: {
      username: "John",
    },
    date: "24/01/2022",
    sameDay: false,
  },
];

const Messages = () => {
  const { chosenChatDetails, messages } = useSelector((state) => state.chat);

  return (
    <MainContainer>
      <MessagesHeader username={chosenChatDetails?.username} />
      {DUMMY_MESSAGES.map((message, index) => {
        return (
          <Message
            message={message._id}
            sameAuthor={message.sameAuthor}
            date={message.date}
            content={message.content}
            sameDay={message.sameDay}
            username={message.author.username}
          />
        );
      })}
    </MainContainer>
  );
};

export default Messages;
