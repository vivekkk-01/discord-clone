import React, { useEffect, useRef } from "react";
import { styled } from "@mui/system";
import MessagesHeader from "./MessagesHeader";
import { useSelector } from "react-redux";
import Message from "./Message";
import DateSeparator from "./DateSeparator";

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

const convertDate = (date, format) => {
  const map = {
    mm: date.getMonth() + 1,
    dd: date.getDate(),
    yy: date.getFullYear().toString().slice(-2),
    yyyy: date.getFullYear(),
  };

  return format?.replace(/mm|dd|yy|yyy/gi, (matched) => map[matched]);
};

const Messages = () => {
  const { chosenChatDetails, messages } = useSelector((state) => state.chat);
  const scrollRef = useRef();

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <MainContainer>
      <MessagesHeader username={chosenChatDetails?.username} />
      {messages?.map((message, index) => {
        const sameAuthor =
          index > 0 &&
          messages[index].author._id.toString() ===
            messages[index - 1].author._id.toString();
        const sameDay =
          index > 0 &&
          convertDate(new Date(message.date), "dd/mm/yy") ===
            convertDate(new Date(messages[index - 1].date), "dd/mm/yy");
        return (
          <div ref={scrollRef} key={message._id} style={{ width: "97%" }}>
            {(!sameDay || index === 0) && (
              <DateSeparator
                date={convertDate(new Date(message.date), "dd/mm/yy")}
              />
            )}
            <Message
              message={message._id}
              sameAuthor={sameAuthor}
              date={convertDate(new Date(message.date), "dd/mm/yy")}
              content={message.content}
              sameDay={sameDay}
              username={message.author.username}
            />
          </div>
        );
      })}
    </MainContainer>
  );
};

export default Messages;
