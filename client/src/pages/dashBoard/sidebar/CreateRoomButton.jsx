import { Button } from "@mui/material";
import { Add } from "@mui/icons-material";
import React, { useEffect } from "react";
import { createNewRoom } from "../../../communication/roomHandler";
import { useDispatch, useSelector } from "react-redux";
import { openRoomAction } from "../../../redux/actions/roomActions";

const CreateRoomButton = () => {
  const dispatch = useDispatch();
  const { audioOnly, isUserInRoom } = useSelector((state) => state.room);

  const successCallbackFunc = () => {
    dispatch(openRoomAction(true, true));
    createNewRoomInServer();
  };

  const createRoomHandler = () => {
    createNewRoom(audioOnly, successCallbackFunc);
  };

  useEffect(() => {
    if (isUserInRoom) {
      createRoomHandler();
    }
  }, [audioOnly, isUserInRoom]);

  return (
    <Button
      onClick={createRoomHandler}
      style={{
        width: "48px",
        height: "48px",
        borderRadius: "16px",
        margin: 0,
        padding: 0,
        minWidth: 0,
        marginTop: "10px",
        color: "white",
        backgroundColor: "#5865f2",
      }}
    >
      <Add />
    </Button>
  );
};

export default CreateRoomButton;
