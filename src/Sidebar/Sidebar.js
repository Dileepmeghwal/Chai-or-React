import React from "react";
import { NavLink } from "react-router-dom";
import "../Sidebar/sidebar.css";

const Sidebar = () => {
  const sidebar = document.querySelector(".main");

  return (
    <div id="sidebar">
      <nav>
        <div className="header">
          <div className="logo">SPx-DILE</div>
          <div className="close">
            <i class="bx bx-chevrons-left"></i>
          </div>
        </div>
        <ul className="main">
          <li>
            <NavLink to="/">
              <i class="bx bx-home"></i>Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <i class="bx bx-building-house"></i>School
            </NavLink>
          </li>

          <li>
            <NavLink to="/">
              <i class="bx bxs-objects-vertical-bottom"></i>Service
            </NavLink>
            <ul className="collapse">
              <li>
                <NavLink to="/">
                  <i class="bx bx-confused"></i>School
                </NavLink>
              </li>
              <li>
                <NavLink to="/">
                  <i class="bx bx-carousel"></i>School
                </NavLink>
              </li>
              <li>
                <NavLink to="/">
                  <i class="bx bxs-user-account"></i>School
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink to="/">
              <i class="bx bxs-cricket-ball"></i>Blog
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <i class="bx bxl-visual-studio"></i>Setting
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
