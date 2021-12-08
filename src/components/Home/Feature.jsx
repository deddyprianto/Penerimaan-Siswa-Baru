import React, { useLayoutEffect } from "react";
import baju from "../../img/baju.png";
import buku from "../../img/buku.png";
import eks from "../../img/eks.png";
import guru from "../../img/guru.png";
import kuri from "../../img/kuri.png";
import Image from "next/image";
import VanillaTilt from "vanilla-tilt";

const Feature = () => {
  const featureRow1 = [
    {
      namaF: "Baju Gratis",
      ket: "Baju Gratis dari semester awal",
      urlImg: baju,
    },
    {
      namaF: "Buku Gratis",
      ket: "Buku Gratis dari semester awal",
      urlImg: buku,
    },
    {
      namaF: "ekstrakurikuler Gratis",
      ket: "eks Gratis dari semester awal",
      urlImg: eks,
    },
  ];
  const featureRow2 = [
    {
      namaF: "Guru Yang Berpengalaman",
      ket: "Tenaga pengajar Guru dari yang berpengalaman",
      urlImg: guru,
    },
    {
      namaF: "kurikulum Gratis",
      ket: "kurikulum Gratis dari semester awal",
      urlImg: kuri,
      style: "",
    },
  ];

  useLayoutEffect(() => {
    const data = [].slice.call(document.querySelectorAll("#show3D"));
    VanillaTilt.init(data, {
      max: 25,
      speed: 150,
      "max-glare": 0.2,
      scale: 2,
    });
  }, []);

  return (
    <div className="w-full mt-3 flex flex-col justify-center items-center ">
      <h1 className="text-gray-400 font-semibold text-2xl">
        Apa yang Disediakan oleh sekolah
      </h1>
      {/* info card ROW 1*/}
      <div className="w-4/5 grid grid-rows-3 grid-cols-1 place-content-center md:grid-cols-3 md:grid-rows-1 md:w-10/12  md:gap-x-2 mb-3">
        {featureRow1.map((data, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg w-full grid grid-rows-3 place-items-center mt-2 mb-2"
          >
            <h2 className="text-gray-200 font-semibold">{data.namaF}</h2>
            <div
              className="w-full flex justify-center xl:justify-start 2xl:justify-center"
              style={{
                transformStyle: "preserve-3d",
                transform: "perspective(1000px)",
                transform: "translateZ(20px)",
              }}
              id="show3D"
            >
              <Image
                src={data.urlImg}
                width={200}
                height={100}
                alt="image Feature"
              />
            </div>
            <p className="text-gray-400 text-center">{data.ket}</p>
          </div>
        ))}
      </div>
      {/* card ROW 2 */}
      <div className="w-4/5 grid grid-rows-2 grid-cols-1 place-content-center md:grid-cols-2 md:grid-rows-1 md:w-10/12  md:gap-x-2 justify-items-center">
        {featureRow2.map((data, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg w-full grid grid-rows-3 place-items-center mt-2 mb-2 md:w-4/5"
          >
            <h2 className="text-gray-200 font-semibold">{data.namaF}</h2>
            <div
              className="w-full flex justify-center xl:justify-start 2xl:justify-center"
              style={{
                transformStyle: "preserve-3d",
                transform: "perspective(1000px)",
                transform: "translateZ(20px)",
              }}
              id="show3D"
            >
              <Image
                src={data.urlImg}
                width={200}
                height={100}
                alt="image Feature"
              />
            </div>
            <p className="text-gray-400 text-center">{data.ket}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
