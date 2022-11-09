import React from "react";
import "./Sidebar.css";
import HomeIcon from "@mui/icons-material/Home";
import FreeBreakfastIcon from '@mui/icons-material/FreeBreakfast';
import RamenDiningIcon from '@mui/icons-material/RamenDining';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import Person4Icon from '@mui/icons-material/Person4';
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
          <SidebarRow Icon={FreeBreakfastIcon} title="Breakfast" />
          <SidebarRow Icon={RamenDiningIcon} title="Lunch" />
          <SidebarRow Icon={FastfoodIcon} title="Snacks" />
          <SidebarRow Icon={DinnerDiningIcon} title="Dinner" />
          <hr />
          <SidebarRow Icon={Person4Icon} title="Creator" />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
