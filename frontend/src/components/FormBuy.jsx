import React, { useState, useEffect } from "react";
import axios from "axios";
import useSWR from "swr";
// import { useNavigate } from 'react-router-dom';
import { CircularProgress } from "@mui/material";

/* Assets */
import buyNow from "../assets/gifs/buy-now.gif";

function FormBuy() {
  /* Circular Progress Indicator */
  const [level, setLevel] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setLevel((newLevel) => (newLevel >= 100 ? 0 : newLevel + 10));
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  /* Checkbox Value */
  const [firstPcs, setFirstPcs] = useState(false);
  const [secondPcs, setSecondPcs] = useState(false);
  const [bothPcs, setBothPcs] = useState(false);

  const handleChangeFirst = () => {
    setFirstPcs(!firstPcs);
  };
  const handleChangeSecond = () => {
    setSecondPcs(!secondPcs);
  };
  const handleChangeBoth = () => {
    setBothPcs(!bothPcs);
  };

  /* Set up Input MySQL */
  const [name, setName] = useState("");
  const [telephone, setTelephone] = useState("");
  const [address, setAddress] = useState("");
  // const navigate = useNavigate();

  const saveBuyer = async (e) => {
    try {
      alert("Terima Kasih!");
      await axios.post("http://localhost:8000/buyers", {
        name,
        telephone,
        address,
        firstPcs,
        secondPcs,
        bothPcs,
      });
      e.preventDefault();
      // navigate("/");
      setName("");
      setTelephone("");
      setAddress("");
    } catch (error) {
      console.log(error);
    }
  };

  const fetcher = async () => {
    const response = await axios.get("http://localhost:8000/buyers");
    return response.data;
  };

  const { data } = useSWR("buyers", fetcher);
  if (!data) return;
  <div
    style={{
      width: "95%",
      textAlign: "center",
      marginBottom: "12px",
      marginTop: "12px",
    }}
  >
    <CircularProgress
      color="primary"
      variant="determinate"
      value={level}
      size="60px"
    />
  </div>;

  return (
    <div className="container-form-buy" style={{ marginTop: "-5px" }}>
      <h3 style={{ fontWeight: "600" }} className="title-form">
        Diskon 50%
      </h3>
      <div className="price-form">
        <h4 className="text-price-form-through" style={{ fontWeight: "700" }}>
          RP 499.000
        </h4>
        <h4 className="block-price" style={{ fontWeight: "400" }}>
          |
        </h4>
        <h4 className="only" style={{ fontWeight: "700" }}>
          Hanya
          <span style={{ fontWeight: "400" }}> RP 249.000</span>
        </h4>
      </div>
      <div>
        <h3 className="text-supp" style={{ fontWeight: "600" }}>
          Gratis Ongkir Seluruh Indonesia
        </h3>
      </div>
      <div>
        <h3 className="text-supp" style={{ fontWeight: "600" }}>
          Dukungan pengiriman nasional
        </h3>
      </div>

      <div className="form-buy">
        <form onSubmit={saveBuyer}>
          <input
            type="text"
            className="name"
            placeholder="Nama"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="text"
            className="telephone"
            placeholder="Telepon"
            value={telephone}
            onChange={(e) => setTelephone(e.target.value)}
            required
          />
          <input
            type="text"
            className="address"
            placeholder="Alamat"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
          <div className="check-btn">
            <h4>Ingin membeli :</h4>
            <div className="container-checkbox">
              <input
                type="checkbox"
                name="firstPcs"
                onChange={handleChangeFirst}
                value="firstPcs"
                checked={firstPcs}
              />
              <label htmlFor="" className="first-child">
                {" "}
                1 Set Perkakas 16pcs - Rp 249.000
              </label>
            </div>
            <div className="container-checkbox">
              <input
                type="checkbox"
                name="secondPcs"
                onChange={handleChangeSecond}
                value="secondPcs"
                checked={secondPcs}
              />
              <label htmlFor="">1 Set Perkakas 46pcs - Rp 299.000</label>
            </div>
            <div className="container-checkbox">
              <input
                type="checkbox"
                name="bothPcs"
                onChange={handleChangeBoth}
                value="bothPcs"
                checked={bothPcs}
              />
              <label htmlFor="">
                1 Set Perkakas 16pcs + 1 Set 46pcs - Rp 499.000{" "}
                <strong>(Hemat Rp 49.000)</strong>
              </label>
            </div>
          </div>
          <h3>
            {" "}
            <span>*</span>Membeli = Sudah membaca keseluruhan.
          </h3>
          <div className="container-btn-submit">
            <input
              alt=""
              className="btn-form-submit"
              type="image"
              name="submit"
              src={buyNow}
              width="350px"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormBuy;
