import React from "react";
import { Clear, Check } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";

const InvitationDecisionButtons = ({
  disabled,
  acceptInvitationHandler,
  rejectInvitationHandler,
}) => {
  return (
    <Box sx={{ display: "flex" }}>
      <IconButton
        disabled={disabled}
        onClick={acceptInvitationHandler}
        style={{ color: "white" }}
      >
        <Check />
      </IconButton>
      <IconButton
        disabled={disabled}
        onClick={rejectInvitationHandler}
        style={{ color: "white" }}
      >
        <Clear />
      </IconButton>
    </Box>
  );
};

export default InvitationDecisionButtons;
