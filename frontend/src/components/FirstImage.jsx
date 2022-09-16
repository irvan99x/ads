import React from "react";
import img1 from "../assets/images/1-16.png";
import img2 from "../assets/images/1-46.jpg";

function FirstImage() {
  return (
    <div className="img-1">
      <img src={img1} alt="img-1" width="441px" />
      <img src={img2} alt="img-2" width="441px" />
    </div>
  );
}

export default FirstImage;
