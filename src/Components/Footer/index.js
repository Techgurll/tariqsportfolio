import React from "react";
import twitter from "../../img/twitter.svg";
import envelope from "../../img/envelope.svg";
import instagram from "../../img/instagram.svg";
import dribble from "../../img/dribble.svg";
import "./index.scss";

function Footer() {
  return (
    <div>
      <div className="footer d-flex justify-content-between px-5">
        <div className=" left px-3">
          <p className="">
            If you think I’d be a <span>good fit</span> for your{" "}
            <span>team</span>,<a href="twitter.com"> drop me a message</a>
          </p>
        </div>
        <div className="d-flex right">
          <a href="https://twitter.com/TariqFas" className="pr-3">
            <img src={twitter} alt="twitter" />
          </a>
          <div className="pr-3">
            {" "}
            <img src={dribble} alt="dribble" />
          </div>
          <a href="#" className="pr-3">
            <img src={instagram} alt="instagram" />
          </a>
          <div className="pr-3">
            {" "}
            <img src={envelope} alt="envelope" />
          </div>
          {/* <h1>sggssgs</h1>
        <h1>sggssgs</h1>
        <h1>sggssgs</h1>
        <h1>sggssgs</h1> */}
        </div>
      </div>
    </div>
  );
}
export default Footer;
