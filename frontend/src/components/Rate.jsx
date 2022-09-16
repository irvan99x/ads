import rateProfile from "../assets/images/rate-profile.png";
import stars from "../assets/images/stars.png";
import React from "react";
import rateProfile1 from "../assets/images/comment1.jpg";
import rateProfile2 from "../assets/images/comment2.jpg";
import rateProfile3 from "../assets/images/comment3.jpg";
import rateProfile4 from "../assets/images/comment4.jpg";

function Rate() {
  return (
    <>
      <div className="container-rate">
        <img className="rate-profile" src={rateProfile1} alt="rate-profile" />
        <div className="container-inside-rate">
          <div className="name-rate">
            <h6>Samsudin</h6>
            <img
              src={stars}
              alt="stars-profile"
              width="80"
              style={{
                marginTop: "22px",
                marginLeft: "25px",
                marginBottom: "10px",
              }}
            />
          </div>
          <div className="comment">
            <p style={{ paddingTop: "7px" }}>Harga: sangat murah</p>
            <p>KUalitas: bagus, tidak mengecewakan saya,</p>
            <p>lengkap, sangat nyaman</p>
          </div>
        </div>
      </div>
      <div className="container-rate">
        <img className="rate-profile" src={rateProfile2} alt="rate-profile" />
        <div className="container-inside-rate">
          <div className="name-rate">
            <h6>Kosasih</h6>
            <img
              src={stars}
              alt="stars-profile"
              width="80"
              style={{
                marginTop: "22px",
                marginLeft: "25px",
                marginBottom: "10px",
              }}
            />
          </div>
          <div className="comment">
            <p style={{ paddingTop: "7px" }}>
              Alhamdulillah paket sampai rumah. Kurir dan penjualnya ramah.
              Paket sampai dengan cepat,
            </p>
            <p>terima kasih</p>
          </div>
        </div>
      </div>
      <div className="container-rate">
        <img className="rate-profile" src={rateProfile3} alt="rate-profile" />
        <div className="container-inside-rate">
          <div className="name-rate">
            <h6>Arman Ramadan</h6>
            <img
              src={stars}
              alt="stars-profile"
              width="80"
              style={{
                marginTop: "22px",
                marginLeft: "25px",
                marginBottom: "10px",
              }}
            />
          </div>
          <div className="comment">
            <p style={{ paddingTop: "7px" }}>
              Seller sangat komunikati dan sangat bertanggung jawab dengan
              barang yang dijual. Salut. Barang berfungsi sangat baik dan tidak
              mengecewakan
            </p>
          </div>
        </div>
      </div>
      <div className="container-rate">
        <img className="rate-profile" src={rateProfile4} alt="rate-profile" />
        <div className="container-inside-rate">
          <div className="name-rate">
            <h6>Amelia Putri</h6>
            <img
              src={stars}
              alt="stars-profile"
              width="80"
              style={{
                marginTop: "22px",
                marginLeft: "25px",
                marginBottom: "10px",
              }}
            />
          </div>
          <div className="comment">
            <p style={{ paddingTop: "7px" }}>
              Barang sudah datang. Produk sangat bagus, packing aman banget,
              seller ramah dan respon cepat. Terimakasih seller.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Rate;
