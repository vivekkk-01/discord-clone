import React from "react";
import { Outlet } from "react-router-dom";
import AlertNotification from "../../shared/components/AlertNotification";
import { useSelector } from "react-redux";

const AuthRoot = () => {
  const { showErrorAlert, errorAlertContent } = useSelector(
    (state) => state.errorAlert
  );
  return (
    <>
      <Outlet />
      {showErrorAlert && <AlertNotification alertContent={errorAlertContent} />}
    </>
  );
};

export default AuthRoot;
