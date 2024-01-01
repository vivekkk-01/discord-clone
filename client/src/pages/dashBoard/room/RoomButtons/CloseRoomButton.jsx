import { Close } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import { leaveRoomHandler } from "../../../../communication/roomHandler";

const CloseRoomButton = () => {
  const handleLeaveRoom = () => {
    leaveRoomHandler();
  };

  return (
    <IconButton onClick={handleLeaveRoom} style={{ color: "white" }}>
      <Close />
    </IconButton>
  );
};

export default CloseRoomButton;
