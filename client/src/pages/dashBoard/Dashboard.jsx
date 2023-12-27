import { styled } from "@mui/system";
import React, { useEffect } from "react";
import SideBar from "./sidebar/SideBar";
import FriendsSideBar from "./friendsSidebar/FriendsSideBar";
import Messenger from "./messenger/Messenger";
import AppBar from "./appbar/AppBar";
import { redirect, useNavigate } from "react-router-dom";
import { connectWithSocketServer } from "../../communication/socketServer";
import ErrorAlertNotification from "../../shared/components/ErrorAlertNotification";
import { useSelector } from "react-redux";

const Wrapper = styled("div")({
  width: "100vw",
  height: "100vh",
  display: "flex",
});

const Dashboard = () => {
  const userDetails = JSON.parse(localStorage.getItem("discord-user"));
  const navigate = useNavigate();
  const { showErrorAlert, errorAlertContent } = useSelector(
    (state) => state.errorAlert
  );

  useEffect(() => {
    if (!userDetails) {
      navigate("/auth/login");
    } else {
      connectWithSocketServer(userDetails);
    }
  }, [userDetails]);

  return (
    <Wrapper>
      <SideBar />
      <FriendsSideBar />
      <Messenger />
      <AppBar />
      {showErrorAlert && (
        <ErrorAlertNotification errorAlertContent={errorAlertContent} />
      )}
    </Wrapper>
  );
};

export default Dashboard;

export const loader = () => {
  const userDetails = JSON.parse(localStorage.getItem("discord-user"));
  if (!userDetails) {
    return redirect("/auth/login");
  }
  return null;
};
