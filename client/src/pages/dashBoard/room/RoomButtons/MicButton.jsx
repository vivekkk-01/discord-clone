import React, { useState } from "react";
import { Mic, MicOff } from "@mui/icons-material";
import { IconButton } from "@mui/material";

const MicButton = () => {
  const [micEnabled, setMicEnabled] = useState(true);

  const handleToggleMic = () => {
    setMicEnabled((prev) => !prev);
  };

  return (
    <IconButton onClick={handleToggleMic} style={{ color: "white" }}>
      {micEnabled ? <Mic /> : <MicOff />}
    </IconButton>
  );
};

export default MicButton;
