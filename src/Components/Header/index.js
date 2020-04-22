import React from "react";
import header from "../../img/header.png";
import "./index.scss";

function Header() {
  return (
    <div className="row mt-5 mb-5 ml-5 mr-5 header">
      <div className="col-md-6 left">
        <h1>
          Hi, My name is <span>Tariq</span> 
          <br />
          and I’m a <span>Digital Product Designer</span>
        </h1>
        <p>
          with focus on User interface design and a bit of User Experience
          design
          <br />I would say more, but why don’t you..
        </p>
        <h5 className="header-button">Find Out</h5>
      </div>
      <div className="col-md-6 text-right right">
        <img className="header-img" src={header} alt="header" />
      </div>
    </div>
  );
}

export default Header;
