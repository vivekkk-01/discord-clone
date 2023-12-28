import { Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const ChosenChatLabel = () => {
  const { chosenChatDetails } = useSelector((state) => state.chat);

  const username = chosenChatDetails?.username;

  return (
    <Typography sx={{ fontSize: "16px", color: "white", fontWeight: "bold" }}>
      {username ? `Chat buddy: ${username}` : ""}
    </Typography>
  );
};

export default ChosenChatLabel;
