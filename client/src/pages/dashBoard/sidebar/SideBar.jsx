import React from "react";
import { styled } from "@mui/system";
import MainPageButton from "./MainPageButton";
import CreateRoomButton from "./CreateRoomButton";
import { useSelector } from "react-redux";
import ActiveRoomButton from "./ActiveRoomButton";

const MainContainer = styled("div")({
  width: "72px",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#202225",
});

const SideBar = () => {
  const { activeRooms } = useSelector((state) => state.room);

  return (
    <MainContainer>
      <MainPageButton />
      <CreateRoomButton />
      {activeRooms.map(({ roomId, roomCreator, participants }) => (
        <ActiveRoomButton
          key={roomId}
          roomId={roomId}
          creatorUsername={roomCreator.username}
          amountOfParticipants={participants.length}
        />
      ))}
    </MainContainer>
  );
};

export default SideBar;
