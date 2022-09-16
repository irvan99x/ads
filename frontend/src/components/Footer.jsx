import React from "react";
import home from "../assets/images/home.png";
import phone from "../assets/images/phone.png";
import email from "../assets/images/email.png";
import web from "../assets/images/web.png";
import cart from "../assets/images/cart.png";
import write from "../assets/images/write.png";
import key from "../assets/images/key.png";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="address-icon">
          <div>
            <img src={home} alt="home" width="20px" />
          </div>
          <h6>
            Alamat
            <span style={{ marginLeft: "5px" }}>
              : Jl. Kartika Plaza Gg. Puspa Ayu No. 97, Kuta, Kec. Kuta Kab. Badung, Bali. 80361, Indonesia
            </span>
          </h6>
        </div>
        <div className="phone">
          <div>
            <img src={phone} alt="phone" width="20px" />
          </div>
          <h6>
            Hotline
            <span style={{ marginLeft: "8px" }}>: +62 856 9327 2810</span>
          </h6>
        </div>
        <div className="email">
          <div>
            <img src={email} alt="email" width="20px" />
          </div>
          <h6>
            Email
            <span style={{ marginLeft: "18px" }}>: garagejakarta@gmail.com</span>
          </h6>
        </div>
        <div className="web">
          <div>
            <img src={web} alt="web" width="20px" />
          </div>
          <h6>
            Website <span>: https://www.garagejakarta.com</span>
          </h6>
        </div>
        <div className="text-kebijakan">KEBIJAKAN</div>
        <div className="pengembalian">
          <img src={cart} alt="cart" />
          <h6>Pengembalian & Kebijakan Pengiriman</h6>
        </div>
        <div className="kebijakan">
          <div className="pembelian">
            <img src={write} alt="write" width="20px" />
            <h6>Kebijakan Pembelian</h6>
          </div>
          <div>
            <div className="pengiriman">
              <img src={key} alt="key" width="20px" />
              <h6>Kebijakan Pengiriman</h6>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <span>Copyright</span>
        &copy;
        <span>2022 All Rights Reserved www.iniwebsite.com</span>
      </div>
    </>
  );
}

export default Footer;
