import orderInfo from "../assets/images/order.png";
import React from "react";
import guarantee from "../assets/images/gurantee.png";
import sendCar from "../assets/images/send-car.png";
import daySeven from "../assets/images/abcde.png";
import quality from "../assets/images/quality.png";

function OrderInfo() {
  return (
    <>
      <div className="container-order">
        <div
          style={{
            display: "flex",
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          <div className="container-order-1">
            <img className="img1" src={guarantee} alt="order1" width="90px" />
            <h4 className="text-img1">Garansi 6 Bulan</h4>
          </div>
          <div className="container-order-2">
            <img className="img2" src={sendCar} alt="order2" width="90px" />
            <h4 className="text-img2">Pengirman cepat seluruh Indonesia</h4>
          </div>
        </div>
      </div>
      <div className="container-order-bottom">
        <div
          style={{
            display: "flex",
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          <div className="container-order-3">
            <img className="img3" src={daySeven} alt="order3" width="90px" />
            <h4 className="text-img3">Pertukaran Dukungan dalam 7 Hari</h4>
          </div>
          <div className="container-order-4">
            <img className="img4" src={quality} alt="order4" width="90px" />
            <h4 className="text-img4">Komitmen terhadap Kualitas</h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderInfo;
