import React, { useState } from "react";
import { useRouter } from "next/router";
import { doc, updateDoc } from "firebase/firestore";
import db from "firebaseConf";
import Swal from "sweetalert2";

const EditSiswa = ({ data }) => {
  const router = useRouter();
  const [refresh, setRefresh] = useState(false);
  const [nama, setNama] = useState("Nama Lengkap");
  const [usia, setUsia] = useState("Usia");
  const [tanggalLahir, setTanggalLahir] = useState("Tanggal Lahir");
  const [agama, setAgama] = useState("Agama");
  const [alamat, setAlamat] = useState("Alamat");
  const [namaAyah, setNamaAyah] = useState("Nama Ayah");
  const [alamatOrangTua, setAlamatOrangTua] = useState("Alamat OrangTua");
  const [pekerjaanAyah, setPekerjaanAyah] = useState("Pekerjaan Ayah");

  const dataInputan = [
    {
      inputan: data?.nama,
      fnInputan: setNama,
    },
    {
      inputan: data?.usia,
      fnInputan: setUsia,
    },
    {
      inputan: data?.tanggalLahir,
      fnInputan: setTanggalLahir,
    },
    {
      inputan: data?.agama,
      fnInputan: setAgama,
    },
  ];
  const dataInputan2 = [
    {
      inputan: data?.namaAyah,
      fnInputan: setNamaAyah,
    },
    {
      inputan: data?.alamatOrangTua,
      fnInputan: setAlamatOrangTua,
    },
    {
      inputan: data?.pekerjaanAyah,
      fnInputan: setPekerjaanAyah,
    },
  ];
  console.log("render ulang");
  const btnFN = async (e) => {
    e.preventDefault();
    try {
      const updateData = doc(db, "datasiswa", data?.id);
      const docRef = await updateDoc(updateData, {
        nama,
        usia,
        tanggalLahir,
        agama,
        alamat,
        namaAyah,
        alamatOrangTua,
        pekerjaanAyah,
      });

      const swal = await Swal.fire({
        title: "Berhasil!",
        text: "Data Berhasil Di Edit",
        icon: "success",
        confirmButtonText: "Tutup",
      });
      if (swal.isConfirmed) {
        setRefresh(true);
      }
    } catch (error) {
      Swal.fire({
        title: "Gagal!",
        text: "Data Gagal Dikirim",
        icon: "error",
        confirmButtonText: "Tutup",
      });
    }
  };
  return (
    <div className="absolute top-0 left-0 bottom-0 right-0 z-50 bg-blue-500">
      <div className="w-full h-full flex flex-col justify-center items-center ">
        <h1 className="text-center text-gray-100 text-lg font-bold">
          Page Edit Siswa
        </h1>
        {/* inputan */}
        <div className="w-full grid grid-cols-1 grid-rows-3 md:grid-cols-4 md:grid-rows-1">
          {/* col pertama Dta diri anak */}
          <div className="flex flex-col justify-center items-center md:col-span-2  md:justify-self-end md:w-1/2">
            <h3 className="text-center text-gray-400 font-bold mt-5 text-2xl">
              Input Data Siswa Baru
            </h3>
            <div className="flex flex-col items-center bg-white shadow-lg rounded-lg w-4/5 lg:w-11/12">
              {dataInputan.map((data, key) => (
                <input
                  className="w-4/5 bg-gray-100 m-2 rounded-lg h-10 outline-none text-center"
                  key={key}
                  type="text"
                  placeholder={data.inputan}
                  onChange={(e) => data.fnInputan(e.target.value)}
                />
              ))}
            </div>
          </div>
          {/* col 2 data diri orang Tua */}
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-center text-gray-400 font-bold mt-5 text-2xl">
              Input Data Orang tua siswa
            </h3>
            <div className="flex flex-col items-center bg-white shadow-lg rounded-lg w-4/5 lg:w-11/12">
              {dataInputan2.map((data, key) => (
                <input
                  className="w-4/5 bg-gray-100 m-2 rounded-lg h-10 outline-none text-center"
                  key={key}
                  type="text"
                  placeholder={data.inputan}
                  onChange={(e) => data.fnInputan(e.target.value)}
                />
              ))}
            </div>
          </div>
          <div className="justify-self-center self-center md:justify-self-start">
            <button
              onClick={btnFN}
              className="rounded-lg shadow-lg bg-green-700 w-32 h-10 text-gray-200 cursor-pointer"
            >
              Kirim Data
            </button>
            <button
              onClick={() => router.back()}
              className="rounded-lg shadow-lg bg-green-700 w-32 h-10 text-gray-200 cursor-pointer ml-2"
            >
              Kembali
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditSiswa;
