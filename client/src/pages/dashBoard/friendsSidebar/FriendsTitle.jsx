import { Typography } from "@mui/material";
import React from "react";

const FriendsTitle = ({ title }) => {
  return (
    <Typography
      sx={{
        textTransform: "uppercase",
        marginTop: "10px",
        fontSize: "14px",
        color: "#8e9297",
      }}
    >
      {title}
    </Typography>
  );
};

export default FriendsTitle;
