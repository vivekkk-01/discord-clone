import React from "react";
import { Button, Typography } from "@mui/material";
import Avatar from "../../../../shared/components/Avatar";
import OnlineIndicator from "./OnlineIndicator";

const FriendListItem = ({ id, isOnline, username }) => {
  return (
    <Button
      style={{
        width: "100%",
        height: "42px",
        marginTop: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        position: "relative",
        textTransform: "uppercase",
        color: "black",
      }}
    >
      <Avatar username={username} />
      <Typography
        align="left"
        variant="subtitle1"
        style={{
          marginLeft: "7px",
          fontWeight: 700,
          color: "#8e9297",
        }}
      >
        {username}
      </Typography>
      {isOnline && <OnlineIndicator />}
    </Button>
  );
};

export default FriendListItem;
