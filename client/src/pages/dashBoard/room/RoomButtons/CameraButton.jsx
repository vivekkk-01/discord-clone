import React, { useState } from "react";
import { Videocam, VideocamOff } from "@mui/icons-material";
import { IconButton } from "@mui/material";

const CameraButton = () => {
  const [videoCamEnabled, setVideoCamEnabled] = useState(true);

  const handleToggleCamera = () => {
    setVideoCamEnabled((prev) => !prev);
  };

  return (
    <IconButton onClick={handleToggleCamera} style={{ color: "white" }}>
      {videoCamEnabled ? <Videocam /> : <VideocamOff />}
    </IconButton>
  );
};

export default CameraButton;
