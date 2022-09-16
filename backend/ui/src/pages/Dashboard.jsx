import React, { useState, useEffect } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import useSWR, { useSWRConfig } from "swr";
import { MdModeEditOutline, MdDelete } from "react-icons/md";

function Dashboard() {
  const [name, setName] = useState("");
  const [token, setToken] = useState("");
  const [expire, setExpire] = useState("");
  const [buyers, setBuyers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    refreshToken();
    getBuyers();
  });

  const refreshToken = async () => {
    try {
      const response = await axios.get("http://localhost:8000/token");
      setToken(response.data.accessToken);
      const decoded = jwt_decode(response.data.accessToken);
      setName(decoded.name);
      setExpire(decoded.exp);
    } catch (error) {
      if (error.response) {
        navigate("/");
      }
    }
  };

  const axiosJWT = axios.create();

  axiosJWT.interceptors.request.use(
    async (config) => {
      const currentDate = new Date();
      if (expire * 1000 < currentDate.getTime()) {
        const response = await axios.get("http://localhost:8000/token");
        config.headers.Authorization = `Bearer ${response.data.accessToken}`;
        setToken(response.data.accessToken);
        const decoded = jwt_decode(response.data.accessToken);
        setName(decoded.name);
        setExpire(decoded.exp);
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  const getBuyers = async () => {
    const response = await axiosJWT.get("http://localhost:8000/buyers");
    setBuyers(response.data);
  };

  const { mutate } = useSWRConfig();
  const fetcher = async () => {
    const response = await axios.get("http://localhost:8000/buyers");
    return response.data;
  };

  const { data } = useSWR("products", fetcher);
  if (!data) return <h2>Loading...</h2>;

  const deleteProduct = async (buyerId) => {
    await axios.delete(`http://localhost:8000/buyers/${buyerId}`);
    mutate("buyers");
  };

  return (
    <>
      <br />
      <div className="container-text">
        <h2>Daftar Pembeli</h2>
      </div>
      <div className="table_section">
        <table>
          <thead>
            <tr>
              <th>No.</th>
              <th>Nama</th>
              <th>No. Telp</th>
              <th>Alamat</th>
              <th>16 Pcs</th>
              <th>46 Pcs</th>
              <th>16 Pcs & 46 Pcs</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {data.map((buyer, index) => (
              <tr key={buyer.id}>
                <td>{index + 1}</td>
                <td>{buyer.name}</td>
                <td>{buyer.telephone}</td>
                <td>{buyer.address}</td>
                <td>{buyer.firstPcs}</td>
                <td>{buyer.secondPcs}</td>
                <td>{buyer.bothPcs}</td>
                <td>
                  <button>
                    <MdModeEditOutline size={18} />
                  </button>
                  <button onClick={() => deleteProduct(buyer.id)}>
                    <MdDelete size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Dashboard;
