import { Tooltip } from "@mui/material";
import React from "react";
import PrimaryButton from "../../../shared/components/PrimaryButton";
import Avatar from "../../../shared/components/Avatar";

const ActiveRoomButton = ({
  roomId,
  creatorUsername,
  amountOfParticipants,
  isUserInRoom,
}) => {
  const handleJoinRoom = () => {
    if (amountOfParticipants < 4) {
      // join the room
    }
  };

  const roomButtonDisabled = amountOfParticipants > 3;
  const roomTitle = `Creator: ${creatorUsername}. Connected: ${amountOfParticipants}`;

  return (
    <Tooltip title={roomTitle}>
      <div>
        <PrimaryButton
          disabled={roomButtonDisabled}
          onClick={handleJoinRoom}
          label={<Avatar username={creatorUsername} />}
          additionalStyles={{
            backgroundColor: "transparent",
            border: "none",
            margin: ".5rem 0",
            boxShadow: "none",
          }}
        />
      </div>
    </Tooltip>
  );
};

export default ActiveRoomButton;
