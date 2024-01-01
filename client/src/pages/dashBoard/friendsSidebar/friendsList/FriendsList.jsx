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
        ({ _id, username, isOnline }) => {
          return (
            <FriendListItem
              key={_id}
              username={username}
              isOnline={isOnline}
              _id={_id}
            />
          );
        }
      )}
    </MainContainer>
  );
};

export default FriendsList;
