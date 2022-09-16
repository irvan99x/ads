import React from "react";

function NewText({ nomer, desc }) {
  return (
    <div className="container-text">
      <p>{nomer}</p>
      <p>{desc}</p>
    </div>
  );
}

function ContainerSpec() {
  const specSixteen = [
    { nomer: "1.", desc: "1x Box koper (LxWxH): 27cm x 22cm x 6cm." },
    { nomer: "2.", desc: "1x Tang." },
    { nomer: "3.", desc: "1x Obeng Minus." },
    { nomer: "4.", desc: "1x Obeng Minus kecil." },
    { nomer: "5.", desc: "1x Obeng Kembang." },
    { nomer: "6.", desc: "1x Palu (8oz)." },
    { nomer: "7.", desc: "1x Tes Pen." },
    { nomer: "8.", desc: "1x Set Kunci L (isi 5) 2-6mm." },
    { nomer: "9.", desc: "1x cutter." },
    { nomer: "10.", desc: "1x Lakban Listrik." },
    { nomer: "11.", desc: "1x meteran (2m)." },
    { nomer: "12.", desc: "1x kunci inggris." },
  ];

  const specFourtySix = [
    {
      nomer: "1.",
      desc: "21x soket untuk obeng: T10, T15, T20, T25, T30, T40, H3, H4, H5, H6, H7, H8, S4, S5.5, S7, PH1, PH2, PH3, PZ1, PZ2, PZ3.",
    },
    {
      nomer: "2.",
      desc: '13x 1/4" DR sockets: 4, 4.5, 5, 5.5, 6, 7, 8, 9, 10, 11, 12, 13, 14mm.',
    },
    {
      nomer: "3.",
      desc: "3x Hex Key wrenches: 1.5, 2, 2.5mm.",
    },
    {
      nomer: "4.",
      desc: '1x 1/4" DR universal joint.',
    },
    {
      nomer: "5.",
      desc: '1x 1/4" x2" extension bar.',
    },
    {
      nomer: "6.",
      desc: '1x 1/4" x4" extension bar.',
    },
    {
      nomer: "7.",
      desc: '1x 1/4"x6" flexible extension bar.',
    },
    {
      nomer: "8.",
      desc: '1x 1/4" DR sliding bar.',
    },
    {
      nomer: "9.",
      desc: '1x 1/4" quick drop ratchet handle.',
    },
    {
      nomer: "10.",
      desc: '1x 6" spinner handle.',
    },
    {
      nomer: "11.",
      desc: "1x adaptor.",
    },
    {
      nomer: "12.",
      desc: "1x Kotak Koper Penyimpanan 125mm x 240mm.",
    },
  ];
  return (
    <>
      <div className="container-intro">
        <h2 className="title-introduce-spec">SPESIFIKASI - 16 PCS</h2>
        <div className="desc-text">
          {specSixteen.map((text) => (
            <NewText {...text} key={text.nomer} />
          ))}
        </div>
      </div>
      <div
        className="container-intro"
        style={{ backgroundColor: "transparent" }}
      >
        <h2 className="title-introduce-spec">SPESIFIKASI - 64 PCS</h2>
        <div className="desc-text">
          {specFourtySix.map((text) => (
            <NewText {...text} key={text.nomer} />
          ))}
        </div>
      </div>
    </>
  );
}

export default ContainerSpec;
