import React from "react";

function NewText({ nomer, desc }) {
  return (
    <div className="container-text">
      <p>{nomer}</p>
      <p>{desc}</p>
    </div>
  );
}

function Retur() {
  const descRetur = [
    {
      nomer: "1.",
      desc: "Mohon untuk melakukan video unboxing dari awal sampai terbuka pengecekan barang tanpa terpotong sedikit pun videonya, disaat barang sudah diterima.",
    },
    {
      nomer: "2.",
      desc: "Komplain tanpa video unboxing dan foto bukti tidak akan di terima.",
    },
    {
      nomer: "3.",
      desc: "Jika pembeli ingin retur atau ganti barang setelah pesanan di selesaikan, maka ongkir akan sepenuhnya di tanggung oleh pembeli (dapat di chat lebih lanjut untuk detail nya).",
    },
    {
      nomer: "4.",
      desc: "Kritik, saran dan complain kami terima dengan senang hati melalui chat.",
    },
  ];

  return (
    <div
      className="container-intro"
      style={{
        backgroundColor: "transparent",
        marginBottom: "10px",
        marginTop: "-15px",
      }}
    >
      <h2 className="title-introduce-spec">Komplain & Retur</h2>
      <div className="desc-text">
        {descRetur.map((text) => (
          <NewText {...text} key={text.nomer} />
        ))}
      </div>
    </div>
  );
}

export default Retur;
