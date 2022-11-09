import React from "react";
import "./Sidebar.css";
import HomeIcon from "@mui/icons-material/Home";
import FreeBreakfastIcon from "@mui/icons-material/FreeBreakfast";
import RamenDiningIcon from "@mui/icons-material/RamenDining";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import DinnerDiningIcon from "@mui/icons-material/DinnerDining";
import Person4Icon from "@mui/icons-material/Person4";
import SidebarRow from "./SidebarRow";
import { Link } from "react-router-dom";

function Sidebar() {
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
          <Link className="dec_none" to={"/"}>
            <SidebarRow  Icon={HomeIcon} title="Home" />
          </Link>
          <Link className="dec_none" to={"/breakfast"}>
            <SidebarRow Icon={FreeBreakfastIcon} title="Breakfast" />
          </Link>
          <Link className="dec_none" to={"/lunch"}>
            <SidebarRow Icon={RamenDiningIcon} title="Lunch" />
          </Link>
          <Link className="dec_none" to={"/snacks"}>
            <SidebarRow Icon={FastfoodIcon} title="Snacks" />
          </Link>
          <Link className="dec_none"to={"/dinner"}>
            <SidebarRow Icon={DinnerDiningIcon} title="Dinner" />
          </Link>
          <hr />
          <a className="dec_none" href="https://www.linkedin.com/in/adarsh397k/" target="_blank">
            <SidebarRow Icon={Person4Icon} title="Creator" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
