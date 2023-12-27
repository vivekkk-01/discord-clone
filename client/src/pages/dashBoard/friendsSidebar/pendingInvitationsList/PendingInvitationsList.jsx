import React from "react";
import { styled } from "@mui/system";
import PendingInvitationsListItem from "./PendingInvitationsListItem";
import { useSelector } from "react-redux";

const MainContainer = styled("div")({
  width: "100%",
  height: "22%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const PendingInvitationsList = () => {
  const { pendingFriendsInvitations } = useSelector((state) => state.friends);
  return (
    <MainContainer>
      {pendingFriendsInvitations.map(({ _id, senderId }) => {
        return (
          <PendingInvitationsListItem
            key={_id}
            _id={_id}
            username={senderId.username}
            email={senderId.email}
          />
        );
      })}
    </MainContainer>
  );
};

export default PendingInvitationsList;
