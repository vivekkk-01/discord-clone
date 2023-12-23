import React from "react";
import { styled } from "@mui/system";
import FriendListItem from "./FriendListItem";

const DUMMY_FRIENDS = [
  { id: 1, username: "Friend1", isOnline: true },
  { id: 2, username: "Friend2", isOnline: false },
  { id: 3, username: "Friend3", isOnline: false },
];

const MainContainer = styled("div")({
  flexGrow: 1,
  width: "100%",
});

const FriendsList = () => {
  return (
    <MainContainer>
      {DUMMY_FRIENDS.map(({ id, username, isOnline }) => {
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
