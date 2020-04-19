import React from "react";
import work1 from "../../img/work1.png";
import work2 from "../../img/work2.png";
import work3 from "../../img/work3.png";
import work4 from "../../img/work4.png";
import work5 from "../../img/work5.png";
import work6 from "../../img/work6.png";
import "./index.scss";

function Works() {
  return (
    <div className="works">
      <h1 className="ml-5 pl-5 mt-5 pt-3">Works</h1>

      <div className="row mt-5 mb-5 ml-5 mr-5 work1">
        <div className="col-md-6 pl-5 left">
          <h2>Chorus</h2>
          <p>
            A P2P payment option that makes offline payment
            <br />
            easy, and makes lives easier.
          </p>
        </div>
        <div className="col-md-6 text-right right">
          <img  src={work1} alt="work1" />
        </div>
      </div>
      <div className="row mt-5 mb-5 ml-5 mr-5 work2">
        <div className="col-md-6 pl-5 left">
          <h2>Card Design</h2>
          <p>
            A credit card that uses NFC for faster and
            <br />
            efficient payment.
          </p>
        </div>
        <div className="col-md-6 text-right right">
          <img src={work2} alt="work2" />
        </div>
      </div>

      <div className="row mt-5 mb-5 ml-5 mr-5 work3">
        <div className="col-md-6 left">
          <h2>Haleness</h2>
          <p>An health app that speaks volume</p>
        </div>
        <div className="col-md-6 text-right">
          <img src={work3} alt="work3" />
        </div>
      </div>
      <div className="row mt-5 mb-5 ml-5 mr-5 work4">
        <div className="col-md-6 left">
          <h2>Haqibah</h2>
          <p>
            Fashion accessories such as bags are mainly always
            <br />
            an accessory that cannot be overlooked.
          </p>
        </div>
        <div className="col-md-6 text-right">
          <img src={work4} alt="work4" />
        </div>
      </div>
      <div className="row mt-5 mb-5 ml-5 mr-5 work5">
        <div className="col-md-6 left">
          <h2>Illustrations</h2>
          <p>Different illustrations with different meanings.</p>
        </div>
        <div className="col-md-6 text-right">
          <img src={work5} alt="work5" />
        </div>
      </div>
      <div className="row mt-5 mb-5 ml-5 mr-5 work6">
        <div className="col-md-6 left">
          <h2>Landing Page</h2>
          <p>
            A landing page for a Fintech website that deals
            <br />
            with money transfers.
          </p>
        </div>
        <div className="col-md-6 text-right">
          <img src={work6} alt="work6" />
        </div>
      </div>
    </div>
  );
}

export default Works;
