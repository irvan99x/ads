import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

function AddAdmin() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const [state, setState] = useState(false);
  const [confState, setConfState] = useState(false);

  const toggleBtn = () => {
    setState((prevState) => !prevState);
  };

  const toggleBtnConf = () => {
    setConfState((prevStateConf) => !prevStateConf);
  };

  const Register = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/users", {
        name: name,
        email: email,
        password: password,
        confPassword: confPassword,
      });
      navigate("/listadmin");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <div className="container-body-addadmin">
      <div className="center-addadmin">
        <h1>TAMBAH ADMIN</h1>
        <form onSubmit={Register}>
          <div className="txt_field">
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              required
            />
            <label>Nama</label>
          </div>
          <div className="txt_field">
            <input
              type="text"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
            <label>Email</label>
          </div>
          <div className="txt_field input-element-wrapper">
            <input
              type={state ? "text" : "password"}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
            />
            <button className="btn-eye" onClick={toggleBtn}>
              {state ? (
                <AiOutlineEye size={25} />
              ) : (
                <AiOutlineEyeInvisible size={25} />
              )}
            </button>
            <label>Password</label>
          </div>
          <div className="txt_field input-element-wrapper">
            <input
              type={confState ? "text" : "password"}
              value={confPassword}
              onChange={(e) => {
                setConfPassword(e.target.value);
              }}
              required
            />
            <button className="btn-eye" onClick={toggleBtnConf}>
              {confState ? (
                <AiOutlineEye size={25} />
              ) : (
                <AiOutlineEyeInvisible size={25} />
              )}
            </button>
            <label>Confirm Password</label>
          </div>
          <p
            style={{
              textAlign: "center",
              color: "grey",
              fontSize: "14px",
              marginBottom: "10px",
            }}
            className="has-text-centered"
          >
            {msg}
          </p>
          <input type="submit" value="Register" style={{marginBottom:'40px'}}/>
        </form>
      </div>
    </div>
  );
}

export default AddAdmin
