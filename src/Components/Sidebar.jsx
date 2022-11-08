import React from "react";
import "./Sidebar.css";
import HomeIcon from "@mui/icons-material/Home";
import AddIcon from "@mui/icons-material/Add";
import LogoutIcon from '@mui/icons-material/Logout';
import SidebarRow from "./SidebarRow";
import { Avatar } from "@mui/material";

function Sidebar({ name, email }) {

  return (
    <div className="sidebar">
      <div className="user">
        <Avatar src={`https://avatars.dicebear.com/api/human/${Math.floor(Math.random() * 5000)}.svg`} />
        <div className="user_info">
          <h5 className="user_name">name</h5>
          <p className="user_email">name@gmail.com</p>
        </div>
      </div>
      <SidebarRow selected Icon={HomeIcon} title="Home" />
      <SidebarRow Icon={AddIcon} title="Add Recipe" />
      <hr />
      <SidebarRow Icon={LogoutIcon} title="Log Out" />
    </div>
  );
}

export default Sidebar;
