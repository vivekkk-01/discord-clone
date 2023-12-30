import { Button } from "@mui/material";
import { Add } from "@mui/icons-material";
import React from "react";
import { createNewRoom } from "../../../communication/roomHandler";

const CreateRoomButton = () => {
  const createRoomHandler = () => {
    createNewRoom()
  };
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
