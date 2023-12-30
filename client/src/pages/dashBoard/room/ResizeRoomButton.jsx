import React from "react";
import { styled } from "@mui/system";
import { CloseFullscreen, OpenInFull } from "@mui/icons-material";
import { IconButton } from "@mui/material";

const MainContainer = styled("div")({
  position: "absolute",
  right: "10px",
  bottom: "10px",
});

const ResizeRoomButton = ({ isRoomMinimized, handleRoomSize }) => {
  return (
    <MainContainer>
      <IconButton style={{ color: "white" }} onClick={handleRoomSize}>
        {isRoomMinimized ? <OpenInFull /> : <CloseFullscreen />}
      </IconButton>
    </MainContainer>
  );
};

export default ResizeRoomButton;
