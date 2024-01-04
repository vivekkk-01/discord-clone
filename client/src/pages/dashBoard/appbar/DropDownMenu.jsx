import React, { useState } from "react";
import { Menu, MenuItem, IconButton } from "@mui/material";
import { MoreVert } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setAudioOnlyAction } from "../../../redux/actions/roomActions";

const DropDownMenu = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const { audioOnly } = useSelector((state) => state.room);
  const dispatch = useDispatch();

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = () => {
    localStorage.clear();
    navigate("/auth/login");
  };

  const handleAudioOnly = () => {
    dispatch(setAudioOnlyAction(!audioOnly));
  };

  return (
    <div>
      <IconButton onClick={handleOpen} style={{ color: "white" }}>
        <MoreVert />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={logout}>Logout</MenuItem>
        <MenuItem onClick={handleAudioOnly}>
          {audioOnly ? "Audio Only Enabled" : "Audio Only Disabled"}
        </MenuItem>
      </Menu>
    </div>
  );
};

export default DropDownMenu;
