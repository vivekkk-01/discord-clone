import React from "react";
import { styled } from "@mui/system";
import FriendListItem from "./FriendListItem";
import { useSelector } from "react-redux";

const MainContainer = styled("div")({
  flexGrow: 1,
  width: "100%",
});

const checkOnlineUsers = (friends = [], onlineUsers = []) => {
  const friendList = friends?.map((friend) => {
    const isUserOnline = onlineUsers?.find(
      (user) => user.userId === friend._id
    );
    return { ...friend, isOnline: isUserOnline ? true : false };
  });
  return friendList;
};

const FriendsList = () => {
  const { friends, onlineUsers } = useSelector((state) => state.friends);
  return (
    <MainContainer>
      {checkOnlineUsers(friends, onlineUsers).map(
        ({ id, username, isOnline }) => {
          console.log(isOnline, "is user online?");
          return (
            <FriendListItem
              key={id}
              username={username}
              isOnline={isOnline}
              id={id}
            />
          );
        }
      )}
    </MainContainer>
  );
};

export default FriendsList;
