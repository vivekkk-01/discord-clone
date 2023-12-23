import React from "react";
import { Alert, Snackbar } from "@mui/material";

const AlertNotification = ({ alertContent }) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      open
      onClose={() => {}}
    >
      <Alert severity="info">{alertContent}</Alert>
    </Snackbar>
  );
};

export default AlertNotification;
