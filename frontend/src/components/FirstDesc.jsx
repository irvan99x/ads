import React from "react";
import stars from "../assets/images/stars.png";
import nineNime from "../assets/gifs/99.gif";

function Rating() {
  return (
    <div className="rating">
      <h6
        style={{
          fontWeight: "400",
          paddingRight: "3px",
          textDecoration: "underline",
        }}
      >
        4.9
      </h6>
      <img style={{ paddingRight: "7px" }} src={stars} alt="stars" />
      <h6
        style={{
          fontWeight: "400",
          paddingRight: "7px",
        }}
      >
        |
      </h6>
      <h6
        style={{
          fontWeight: "400",
          paddingRight: "3px",
          textDecoration: "underline",
        }}
      >
        8984
      </h6>
      <h6
        style={{
          fontWeight: "400",
          paddingRight: "7px",
        }}
      >
        Evaluasi
      </h6>
      <h6
        style={{
          fontWeight: "400",
          paddingRight: "7px",
        }}
      >
        |
      </h6>
      <h6
        style={{
          fontWeight: "400",
          paddingRight: "3px",
          textDecoration: "underline",
        }}
      >
        748863
      </h6>
      <h6 style={{ fontWeight: "400" }}>Terjual</h6>
    </div>
  );
}

function HandHeld() {
  return (
    <>
      <div className="handheld">
        <h2>ALAT PERKAKAS PORTABLE</h2>
      </div>
      <div className="sold-out">
        <h5 style={{ fontWeight: "400" }}>STOK SEGERA HABIS</h5>
      </div>
      <div className="stock-product">
        <h5 style={{ fontWeight: "400" }}>
          Tinggal{" "}
          <span className="gif-ninenine">
            <img
              src={nineNime}
              alt="gif-ninenine"
              width="40"
              style={{
                marginBottom: "-5px",
                marginRight: "3px",
              }}
            />
          </span>
          produk lagi
        </h5>
      </div>
    </>
  );
}

function FirstDesc() {
  return (
    <div>
      <Rating />
      <HandHeld />
    </div>
  );
}

export default FirstDesc;
