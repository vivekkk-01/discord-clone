import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import AlertNotification from "../shared/components/AlertNotification";
import ErrorAlertNotification from "../shared/components/ErrorAlertNotification";
import { useDispatch, useSelector } from "react-redux";
import { closeErrorAlertAction } from "../redux/actions/errorAlertActions";

const Root = () => {
  const { showAlert, alertContent } = useSelector((state) => state.alert);
  const { showErrorAlert, errorAlertContent } = useSelector(
    (state) => state.errorAlert
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeErrorAlertAction());
  }, []);

  return (
    <>
      <Outlet />
      {showAlert && <AlertNotification alertContent={alertContent} />}
      {showErrorAlert && (
        <ErrorAlertNotification errorAlertContent={errorAlertContent} />
      )}
    </>
  );
};

export default Root;
