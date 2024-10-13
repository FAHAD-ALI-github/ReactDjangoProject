import React from "react";
import "./reasons.css";
import Image1 from "../../assets/image1.png";
import Image2 from "../../assets/image2.png";
import Image3 from "../../assets/image3.png";
import Image4 from "../../assets/image4.png";
import nb from "../../assets/nb.png";
import nike from "../../assets/nike.png";
import adidas from "../../assets/adidas.png";
import tick from "../../assets/tick.png";

const Reasons = () => {
  return (
    <div className="reasons" id="whyus">

        {/* blur patches */}
<div className="blur reasons-blur"></div>


        {/* left side images */}
      <div className="left-side">
        <img src={Image1} alt="" />
        <img src={Image2} alt="" />
        <img src={Image3} alt="" />
        <img src={Image4} alt="" />
      </div>

      {/* right side texts */}
      <div className="right-side">
        <span>Some reasons</span>
        <div>
          <span className="stroke-text">why </span>
          <span>choose us?</span>
        </div>
        {/* DETAILS */}
        <div className="details">
          <div>
            <img src={tick} alt=""></img>
            <span>over 140+ expert coachs</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>train smarter and faster than before</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>1 free program for new member</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>reliable partners</span>
          </div>
        </div>

        {/* OUR PARTNERS */}
        <span
          style={{
            color: "var(--gray)",
            fontWeight: "normal",
          }}
        >
          Our partners
        </span>
        <div className="partners">
          <img src={adidas} alt="" />
          <img src={nike} alt="" />
          <img src={nb} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Reasons;
