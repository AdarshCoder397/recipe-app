import React from "react";
import "./Sidebar.css";
import HomeIcon from "@mui/icons-material/Home";
import AddIcon from "@mui/icons-material/Add";
import LogoutIcon from "@mui/icons-material/Logout";
import SidebarRow from "./SidebarRow";

function Sidebar({ name, email }) {
  return (
    <div className="sidebar">
      <div
        className="offcanvas offcanvas-start"
        data-bs-scroll="true"
        data-bs-backdrop="false"
        tabIndex={-1}
        id="offcanvasScrolling"
        aria-labelledby="offcanvasScrollingLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasScrollingLabel">
           Recipe Book by Adarsh
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>
        <div className="offcanvas-body">
          <SidebarRow selected Icon={HomeIcon} title="Home" />
          <SidebarRow Icon={AddIcon} title="Add Recipe" />
          <hr />
          <SidebarRow Icon={LogoutIcon} title="Log Out" />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
