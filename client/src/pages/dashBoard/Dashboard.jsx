import { styled } from "@mui/system";
import React, { useEffect } from "react";
import SideBar from "./sidebar/SideBar";
import FriendsSideBar from "./friendsSidebar/FriendsSideBar";
import Messenger from "./messenger/Messenger";
import AppBar from "./appbar/AppBar";
import { redirect, useNavigate } from "react-router-dom";

const Wrapper = styled("div")({
  width: "100vw",
  height: "100vh",
  display: "flex",
});

const Dashboard = () => {
  const token = localStorage.getItem("discord-user");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/auth/login");
    }
  }, [token]);

  return (
    <Wrapper>
      <SideBar />
      <FriendsSideBar />
      <Messenger />
      <AppBar />
    </Wrapper>
  );
};

export default Dashboard;

export const loader = () => {
  const token = localStorage.getItem("discord-user");
  if (!token) {
    return redirect("/auth/login");
  }
  return null;
};
