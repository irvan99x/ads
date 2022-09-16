import React from "react";

function NewText({ nomer, desc }) {
  return (
    <div className="container-text">
      <p>{nomer}</p>
      <p>{desc}</p>
    </div>
  );
}

function Noted() {
  const notedText = [
    {
      nomer: "1.",
      desc: "Sebelum di kirim barang akan kami cek terlebih dahulu ( QC ).",
    },
    {
      nomer: "2.",
      desc: "Kami tidak akan mengirimkan barang yang rusak ataupun bekas.",
    },
    {
      nomer: "3.",
      desc: "Barang sudah kami packing dengan aman. Tetapi pembeli di perbolehkan untuk memesan extra packaging jika berkenan.",
    },
  ];
  return (
    <div className="container-intro" style={{ marginBottom: "15px" }}>
      <h2 className="title-introduce-spec">CATATAN</h2>
      <div className="desc-text">
        {notedText.map((text) => (
          <NewText {...text} key={text.nomer} />
        ))}
      </div>
    </div>
  );
}

export default Noted;
