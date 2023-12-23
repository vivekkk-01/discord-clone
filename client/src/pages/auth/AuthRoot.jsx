import React from "react";
import { Outlet } from "react-router-dom";
import AlertNotification from "../../shared/components/AlertNotification";
import { useSelector } from "react-redux";

const AuthRoot = () => {
  const { showAlert, alertContent } = useSelector((state) => state.alert);
  return (
    <>
      <Outlet />
      {showAlert && <AlertNotification alertContent={alertContent} />}
    </>
  );
};

export default AuthRoot;
