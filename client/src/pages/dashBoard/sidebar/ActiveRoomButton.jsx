import { Tooltip } from "@mui/material";
import React from "react";
import PrimaryButton from "../../../shared/components/PrimaryButton";
import Avatar from "../../../shared/components/Avatar";
import { useDispatch } from "react-redux";
import {
  openRoomAction,
  roomDetailsAction,
} from "../../../redux/actions/roomActions";
import { joinRoom } from "../../../communication/socketServer";

const ActiveRoomButton = ({
  roomId,
  creatorUsername,
  amountOfParticipants,
  isUserInRoom,
}) => {
  const dispatch = useDispatch();
  const handleJoinRoom = () => {
    if (amountOfParticipants < 4) {
      dispatch(openRoomAction(true, false));
      dispatch(roomDetailsAction({ roomId }));
      joinRoom({ roomId });
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
