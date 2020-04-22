import React from "react";
import Twitter from "../../img/twitter.png";
import './index.scss';

function Footer() {
  return (
    <div className="row px-5 pb-5 footer">
      <div className="col-md-6  px-5 left">
        <p className="px-5">
          If you think I’d be a <span>good fit</span> for your <span>team</span>
          ,<a href="twitter.com"> drop me a message</a>
        </p>
      </div>
      <div className="col-md-6 px-5 text-right right">
        <img src={Twitter} alt="twitter" />
        <img src={Twitter} alt="twitter" />
        <img src={Twitter} alt="twitter" />
        <img src={Twitter} alt="twitter" />
      </div>
    </div>
  );
}

export default Footer;
