import { Button } from "@mui/material";
import React from "react";

const PrimaryButton = ({ label, additionalStyles, disabled, onClick }) => {
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      variant="contained"
      sx={{
        height: "40px",
        width: "100%",
        bgcolor: "#5865f2",
        fontSize: "16px",
        fontWeight: 500,
      }}
      style={additionalStyles ? additionalStyles : {}}
    >
      {label}
    </Button>
  );
};

export default PrimaryButton;
