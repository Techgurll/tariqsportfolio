import React from "react";
import aboutme from "../../img/aboutme.png";
import "./index.scss";

function AboutMe() {
  return (
    <div className="row mt-5 mb-5 ml-5 mr-5 aboutme" id="aboutme">
      <div className="col-md-6 pl-5 left">
        <h1 className="pb-3">About Me</h1>
        <p>
          I am a <span>multi disciplinary designer</span> with focus on <span>user research,</span>
          <br />
         <span>visual, interaction design & a bit of illustrations.</span>  My work is not
          just limited
          <br />
          to creating beautiful <span>interfaces</span> for both <span>mobile and the web,</span> but also
          <br />
          serving a meaningful purpose behing every <span>pixel.</span>
        </p>
      </div>
      <div className="col-md-6 text-right right">
        <img src={aboutme} alt="aboutme" />
      </div>
    </div>
  );
}

export default AboutMe;
