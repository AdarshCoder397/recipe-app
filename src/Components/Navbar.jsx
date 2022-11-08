import { Button } from "@mui/material";
import React from "react";
import "./Navbar.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";

function Navbar() {
  return (
    <div>
      <nav className="navbar">
          <img
            src="https://e7.pngegg.com/pngimages/890/893/png-clipart-pizza-logo-pizza-delivery-italian-cuisine-chef-pizza-icon-logo-design-food-logo.png"
            alt="Logo"
            height={44}
          />
          <Button
            className="btn sidebar-btn"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasScrolling"
            aria-controls="offcanvasScrolling"
          >
            {<MoreVertIcon className="moreverticon" />}
          </Button>
      </nav>
    </div>
  );
}

export default Navbar;
