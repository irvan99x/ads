import gif1 from "../assets/gifs/beli.gif";
import React, { useState } from "react";
import Modal from "./ModalDialog";

function Navbar() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="navbar">
      <div>
        <h3 className="text-navbar">Alat Perkakas Portable</h3>
        <div className="desc">
          <h3 className="navbar-desc">DISKON 50%</h3>
          <img
            onClick={() => setModalOpen(true)}
            className="btn-gif-navbar"
            alt="pesan-sekarang"
            src={gif1}
            width={180}
          />
        </div>
        <div>
          <h3 className="text-supp" style={{ fontWeight: "600" }}>
            Mendukung pembayaran COD
          </h3>
        </div>
      </div>

      {/* Modal Dialog */}
      {modalOpen && <Modal setOpenModal={setModalOpen} />}
    </div>
  );
}

export default Navbar;
