import React, { useState, useEffect } from "react";
import axios from "axios";
import useSWR from "swr";
// import { useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";

/* Assets */
import btnClose from "../assets/images/close.png";
import FormBuy from "./FormBuy";

function Modal({ setOpenModal }) {
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
  const [plusFee, setPlusFee] = useState(false);

  const handleChange = () => {
    setPlusFee(!plusFee);
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
        plusFee,
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
    <div className="modalBackground">
      <div className="modalContainer">
        <FormBuy />
        <span class="modal-close">
          <img
            src={btnClose}
            alt="close"
            width="20px"
            onClick={() => {
              setOpenModal(false);
            }}
          />
        </span>
      </div>
    </div>
  );
}

export default Modal;
