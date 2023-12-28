import React from "react";
import { styled } from "@mui/system";
import { Typography } from "@mui/material";
import Avatar from "../../../../shared/components/Avatar";

const MainContainer = styled("div")({
  width: "98%",
  display: "flex",
  flexDirection: "column",
  marginTop: "10px",
});

const MessagesHeader = ({ username = "" }) => {
  return (
    <MainContainer>
      <Avatar large username={username} />
      <Typography
        sx={{ margin: "0 5px", fontWeight: "bold", color: "white" }}
        variant="h4"
      >
        {username}
      </Typography>
      <Typography sx={{ margin: "0 5px", color: "#b9bbbe" }}>
        This is the beginning of your conversation with {username}
      </Typography>
    </MainContainer>
  );
};

export default MessagesHeader;
