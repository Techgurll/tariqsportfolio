import React from "react";
import "./index.scss";
import logo from "../../img/logo.png";


function NavBar() {
  return (
    <div className="nav ml-5 mt-5 pl-3 nav-bar">
      <img className="logo" src={logo} alt="logo" />
      <h3 className="ml-5"><a href="#works">Works</a></h3>
      <h3 className="ml-5"><a href="#aboutme">About Me</a></h3>
      <h3 className="ml-5 nav-button">Get In Touch</h3>
    </div>
  );
}

export default NavBar;
