import React, { useState } from "react";
import "./index.scss";

function SideBar() {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };
  return (
    <div
      className={`sidebar sidebar-width ${
        sidebarVisible ? "" : "sidebar-hidden"
      }`}
    >
      <button
        className="navbar-toggler button-bars pr-5"
        type="button"
        data-toggle="collapse"
        data-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={() => toggleSidebar()}
      >
        <span className="fa fa-times icon-colour" id="navicon"></span>
      </button>
      <h3>
        <a href="#works">Works</a>
      </h3>
      <h3>
        <a href="#aboutme">About Me</a>
      </h3>
      <h3>Get In Touch</h3>
    </div>
  );
}

export default SideBar;
