import { Close } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";

const CloseRoomButton = () => {
  const handleLeaveRoom = () => {};

  return (
    <IconButton onClick={handleLeaveRoom} style={{ color: "white" }}>
      <Close />
    </IconButton>
  );
};

export default CloseRoomButton;
