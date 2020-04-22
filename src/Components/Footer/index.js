import React from "react";
import twitter from "../../img/twitter.svg";
import envelope from '../../img/envelope.svg';
import instagram from '../../img/instagram.svg';
import dribble from '../../img/dribble.svg';
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
        <img src={twitter} alt="twitter" className="mr-4"/>
        <img src={dribble} alt="dribble" className="mr-4"/>
        <img src={instagram} alt="instagram" className="mr-4"/>
        <img src={envelope} alt="envelope"/>
      </div>
    </div>
  );
}

export default Footer;
