import React, { useState, useEffect } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { MdModeEditOutline, MdDelete } from "react-icons/md";
import { BsPlusLg } from "react-icons/bs";
import { Link } from "react-router-dom";
import useSWR, { useSWRConfig } from "swr";

function ListAdmin() {
  const [name, setName] = useState("");
  const [token, setToken] = useState("");
  const [expire, setExpire] = useState("");
  const [users, setUsers] = useState([]);
  const axiosJWT = axios.create();
  const { mutate } = useSWRConfig();

  const getUsers = async () => {
    const response = await axiosJWT.get("http://localhost:8000/users", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setUsers(response.data);
  };

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

  useEffect(() => {
    getUsers();
  });

  const deleteUsers = async (userId) => {
    await axios.delete(`http://localhost:8000/users/${userId}`);
    mutate("users");
  };

  return (
    <>
      <br />
      <div className="container-text">
        <h2>Daftar Admin</h2>
      </div>
      <div className="container-add">
        <Link to="/addadmin">
          <button className="btn-add">
            Tambah Admin
            <BsPlusLg style={{ marginLeft: "10px" }} />
          </button>
        </Link>
      </div>
      <div className="table_section">
        <table>
          <thead>
            <tr>
              <th>No.</th>
              <th>Nama</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <button>
                    <MdModeEditOutline size={18} />
                  </button>
                  <button onClick={() => deleteUsers(user.id)}>
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

export default ListAdmin;
