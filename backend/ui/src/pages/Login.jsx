import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const [state, setState] = useState(false);

  const toggleBtn = () => {
    setState((prevState) => !prevState);
  };

  const Auth = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/login", {
        email: email,
        password: password,
      });
      navigate("/dashboard");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <div className="container-body">
      <div className="center">
        <h1>LOGIN ADMIN</h1>
        <form onSubmit={Auth}>
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
              className="password-field"
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
          <div className="pass">Lupa Password ?</div>
          <p
            style={{
              textAlign: "center",
              color: "grey",
              marginTop: "-12px",
              marginBottom: "8px",
            }}
            className="has-text-centered"
          >
            {msg}
          </p>
          <input type="submit" value="Login" />
          <div className="signup_link">
            Belum punya akun ?
            <Link to="/register">
              <span> Daftar</span>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
