import { Button } from "@mui/material";
import React from "react";
import { ClipLoader } from "react-spinners";

const PrimaryButton = ({
  label,
  additionalStyles,
  disabled,
  onClick,
  loading,
  auth,
}) => {
  return (
    <Button
      onClick={onClick}
      disabled={auth ? loading || disabled : disabled}
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
      {auth && loading ? (
        <ClipLoader loading={loading} size={15} color="#fff" />
      ) : auth && !loading ? (
        label
      ) : (
        label
      )}
    </Button>
  );
};

export default PrimaryButton;
