import React, { useState } from "react";
import { styled } from "@mui/system";
import ResizeRoomButton from "./ResizeRoomButton";
import VideosContainer from "./VideosContainer";
import RoomButtons from "./RoomButtons/RoomButtons";

const MainContainer = styled("div")({
  position: "absolute",
  borderRadius: "8px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#202225",
});

const fullScreenRoomStyle = {
  height: "100vh",
  width: "100vw",
};

const minimizedRoomStyle = {
  height: "40vh",
  width: "30vw",
  right: "0%",
  bottom: "0%",
};

const Room = () => {
  const [isRoomMinimized, setIsRoomMinimized] = useState(true);

  const roomResizeHandler = () => {
    setIsRoomMinimized((prev) => !prev);
  };

  return (
    <MainContainer
      style={isRoomMinimized ? minimizedRoomStyle : fullScreenRoomStyle}
    >
      <VideosContainer />
      <RoomButtons />
      <ResizeRoomButton
        handleRoomSize={roomResizeHandler}
        isRoomMinimized={isRoomMinimized}
      />
    </MainContainer>
  );
};

export default Room;
