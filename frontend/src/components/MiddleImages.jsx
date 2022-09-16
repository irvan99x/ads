import React from "react";
import midImage1 from "../assets/images/7-16.jpg";
import midImage2 from "../assets/images/7-46.jpg";

function MiddleImages() {
  return (
    <div className="container-middle-image">
      <img src={midImage1} style={{ marginTop: "-10px" }} alt="" />
      <img src={midImage2} alt="" />
    </div>
  );
}

export default MiddleImages;
