import React, { useState, useEffect } from "react";
import "./index.scss";
import logo from "../../img/logo.png";
import SideBar from "../../Components/SideBar";
import scrollToTop from "../../Helpers/scrollToTop";

function NavBar() {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };
  useEffect(() => {
    //Automatically scroll back to the top of the page whenever the page reloads
    scrollToTop();
  });
  return (
    <div>
      <div className="d-flex justify-content-between">
        <div>
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
            <span
              className={`fa ${sidebarVisible ? "fa-times" : "fa-bars"}`}
              id="navicon"
            ></span>
          </button>
        </div>
        <div>
          <img className="" src={logo} alt="Logo" />
        </div>
      </div>
      <div>
        <SideBar visible={sidebarVisible} />
      </div>

      <div className="nav ml-5 mt-5 pl-3 nav-bar">
        <img className="logo" src={logo} alt="logo" />
        <h3 className="ml-5">
          <a href="#works">Works</a>
        </h3>
        <h3 className="ml-5">
          <a href="#aboutme">About Me</a>
        </h3>
        <h3 className="ml-5 nav-button">Get In Touch</h3>
      </div>
    </div>
  );
}

export default NavBar;
