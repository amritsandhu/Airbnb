import React from "react";
import "./Description.css";
import { AiFillStar } from "react-icons/ai";

function Description() {
  return (
    <div className="houseDescription">
      <span className="firstLine">
        Reverie Cottage-infinity pool -outdoor soaking tub
      </span>

      <div className="location">
        <i>
          <AiFillStar />
        </i>
        <span className="ratings"> 4.89 · &nbsp;</span>
        <span className="reviews">
          271 reviews &nbsp; ·&nbsp;&nbsp;&nbsp;&nbsp;
        </span>
        <span className="address">
          Garden Valley, California, United States
        </span>
      </div>
    </div>
  );
}
export default Description;
