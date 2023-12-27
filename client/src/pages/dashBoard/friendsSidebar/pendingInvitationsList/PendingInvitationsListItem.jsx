import React, { useState } from "react";
import { Tooltip, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Avatar from "../../../../shared/components/Avatar";
import InvitationDecisionButtons from "./InvitationDecisionButtons";
import { useDispatch } from "react-redux";
import {
  acceptFriendAction,
  rejectFriendAction,
} from "../../../../redux/actions/friendsActions";

const PendingInvitationsListItem = ({ _id, username, email }) => {
  const [buttonsDisabled, setButtonsDisabled] = useState(false);
  const dispatch = useDispatch();

  const handleAcceptInvitation = () => {
    dispatch(acceptFriendAction({ _id, email, username }));
    setButtonsDisabled(true);
  };

  const handleRejectInvitation = () => {
    dispatch(rejectFriendAction(email));
    setButtonsDisabled(false);
  };

  return (
    <Tooltip title={email}>
      <div style={{ width: "100%" }}>
        <Box
          sx={{
            width: "100%",
            height: "42px",
            marginTop: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Avatar username={username} />
          <Typography
            sx={{
              marginLeft: "7px",
              fontWeight: 700,
              flexGrow: 1,
              color: "#8e9297",
            }}
          >
            {username}
          </Typography>
          <InvitationDecisionButtons
            disabled={buttonsDisabled}
            acceptInvitationHandler={handleAcceptInvitation}
            rejectInvitationHandler={handleRejectInvitation}
          />
        </Box>
      </div>
    </Tooltip>
  );
};

export default PendingInvitationsListItem;
