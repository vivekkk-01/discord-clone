import React, { useState } from "react";
import { ScreenShare, StopScreenShare } from "@mui/icons-material";
import { IconButton } from "@mui/material";

const ScreenShareButton = () => {
  const [isScreenSharingActive, setIsScreenSharingActive] = useState(false);

  const handleToggleScreenShare = () => {
    setIsScreenSharingActive((prev) => !prev);
  };

  return (
    <IconButton onClick={handleToggleScreenShare} style={{ color: "white" }}>
      {isScreenSharingActive ? <ScreenShare /> : <StopScreenShare />}
    </IconButton>
  );
};

export default ScreenShareButton;
