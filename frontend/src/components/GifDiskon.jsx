import React from "react";
import gifDiskon from "../assets/gifs/diskon.gif";
import checkGreen from "../assets/images/check-green.png";

function GifDiskon() {
  return (
    <>
      <div className="diskon-gif" style={{ marginTop: "28px" }}>
        <img src={gifDiskon} alt="diskon" width="441" />
      </div>
      <div className="check-order">
        <img src={checkGreen} alt="check-green" width="40" />
        <h6 className="text-check">Dukungan pengiriman nasional</h6>
      </div>
    </>
  );
}

export default GifDiskon;
