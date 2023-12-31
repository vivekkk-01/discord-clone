import { Tooltip } from "@mui/material";
import React, { useEffect } from "react";
import PrimaryButton from "../../../shared/components/PrimaryButton";
import Avatar from "../../../shared/components/Avatar";
import { useDispatch, useSelector } from "react-redux";
import {
  openRoomAction,
  roomDetailsAction,
} from "../../../redux/actions/roomActions";
import { joinRoom } from "../../../communication/socketServer";
import { getLocalStreamPreview } from "../../../communication/webRTCHandler";

const ActiveRoomButton = ({
  roomId,
  creatorUsername,
  amountOfParticipants,
  isUserInRoom,
}) => {
  const dispatch = useDispatch();
  const { audioOnly } = useSelector((state) => state.room);
  const successCallbackFunc = () => {
    if (amountOfParticipants < 4) {
      dispatch(openRoomAction(true, false));
      dispatch(roomDetailsAction({ roomId }));
      joinRoom({ roomId });
    }
  };
  const handleJoinRoom = () => {
    getLocalStreamPreview(audioOnly, successCallbackFunc);
  };

  useEffect(() => {
    if (isUserInRoom) {
      handleJoinRoom();
    }
  }, [audioOnly, isUserInRoom]);

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
