import React from "react";
import { styled } from "@mui/system";
import FriendListItem from "./FriendListItem";
import { useSelector } from "react-redux";

const MainContainer = styled("div")({
  flexGrow: 1,
  width: "100%",
});

const FriendsList = () => {
  const { friends } = useSelector((state) => state.friends);
  return (
    <MainContainer>
      {friends.map(({ id, username, isOnline }) => {
        return (
          <FriendListItem
            key={id}
            username={username}
            isOnline={isOnline}
            id={id}
          />
        );
      })}
    </MainContainer>
  );
};

export default FriendsList;
