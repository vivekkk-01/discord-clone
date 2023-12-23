import React from "react";
import { styled } from "@mui/system";
import PendingInvitationsListItem from "./PendingInvitationsListItem";

const MainContainer = styled("div")({
  width: "100%",
  height: "22%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const DUMMY_INVITATIONS = [
  {
    id: "1",
    senderId: {
      username: "Inviter1",
      email: "inviter1@inviter.com",
    },
  },
  {
    id: "2",
    senderId: {
      username: "Inviter2",
      email: "invite2@inviter.com",
    },
  },
];

const PendingInvitationsList = () => {
  return (
    <MainContainer>
      {DUMMY_INVITATIONS.map(({ id, senderId }) => {
        return (
          <PendingInvitationsListItem
            key={id}
            id={id}
            username={senderId.username}
            email={senderId.email}
          />
        );
      })}
    </MainContainer>
  );
};

export default PendingInvitationsList;
