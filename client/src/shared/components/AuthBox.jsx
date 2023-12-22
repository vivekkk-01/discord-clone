import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/system";

const BoxWrapper = styled("div")({
  height: "100vh",
  width: "100vw",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "#5865f2",
});

const AuthBox = ({ children }) => {
  return (
    <BoxWrapper>
      <Box
        sx={{
          height: 400,
          width: 700,
          bgcolor: "#36393f",
          borderRadius: "5px",
          display: "flex",
          flexDirection: "column",
          padding: "25px",
          boxShadow: "0 2px 10px 0 rgb(0 0 0 / 20%)",
        }}
      >
        {children}
      </Box>
    </BoxWrapper>
  );
};

export default AuthBox;
