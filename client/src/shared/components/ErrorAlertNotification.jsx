import React from "react";
import { Alert, Snackbar } from "@mui/material";

const ErrorAlertNotification = ({ errorAlertContent }) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      open
      onClose={() => {}}
    >
      <Alert severity="error">{errorAlertContent}</Alert>
    </Snackbar>
  );
};

export default ErrorAlertNotification;
