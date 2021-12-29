import React, { useState } from "react";
import Swal from "sweetalert2";
import db from "../../firebaseConf";
import { collection, addDoc } from "firebase/firestore";

const Input = () => {
  console.log("RENDER");
  // form siswa
  const [nama, setNama] = useState("Nama Lengkap");
  const [usia, setUsia] = useState("Usia");
  const [tempatTanggalLahirAnak, setTempatTanggalLahirAnak] = useState(
    "Tempat Tanggal Lahir"
  );
  const [agama, setAgama] = useState("Agama");
  const [hobi, setHobi] = useState("Hobi");
  const [gol, setGol] = useState("Golongan darah");
  const [asalTK, setAsalTK] = useState(
    "Asal TK Sebelum nya, Kosongkan jika tidak ada"
  );
  const [tinggalBersama, setTinggalBersama] = useState("Tinggal Bersama");
  const [jumlahSaudara, setJumlahSaudara] = useState("Jumlah Saudara");
  const [anakke, setAnakke] = useState("Anak Ke berapa");

  // form orang Tua
  const [namaAyah, setNamaAyah] = useState("Nama Ayah");
  const [namaIbu, setNamaIbu] = useState("Nama Ibu");
  const [alamatOrangTua, setAlamatOrangTua] = useState("Alamat OrangTua");
  const [pekerjaanAyah, setPekerjaanAyah] = useState("Pekerjaan Ayah");
  const [tempatTanggalLahir, setTempatTanggalLahir] = useState(
    "Tempat Tanggal Lahir"
  );
  const [penghasilan, setPenghasilan] = useState("Penghasilan PerBulan");
  const [golDarah, setGolDarah] = useState("Golongan Darah");
  const dataInputan = [
    {
      inputan: nama,
      fnInputan: setNama,
    },
    {
      inputan: usia,
      fnInputan: setUsia,
    },
    {
      inputan: tempatTanggalLahirAnak,
      fnInputan: setTempatTanggalLahirAnak,
    },
    {
      inputan: agama,
      fnInputan: setAgama,
    },

    {
      inputan: hobi,
      fnInputan: setHobi,
    },
    {
      inputan: gol,
      fnInputan: setGol,
    },
    {
      inputan: asalTK,
      fnInputan: setAsalTK,
    },
    {
      inputan: tinggalBersama,
      fnInputan: setTinggalBersama,
    },
    {
      inputan: jumlahSaudara,
      fnInputan: setJumlahSaudara,
    },
    {
      inputan: anakke,
      fnInputan: setAnakke,
    },
  ];
  const dataInputan2 = [
    {
      inputan: namaAyah,
      fnInputan: setNamaAyah,
    },
    {
      inputan: namaIbu,
      fnInputan: setNamaIbu,
    },
    {
      inputan: alamatOrangTua,
      fnInputan: setAlamatOrangTua,
    },
    {
      inputan: pekerjaanAyah,
      fnInputan: setPekerjaanAyah,
    },
    {
      inputan: tempatTanggalLahir,
      fnInputan: setTempatTanggalLahir,
    },
    {
      inputan: penghasilan,
      fnInputan: setPenghasilan,
    },
    {
      inputan: golDarah,
      fnInputan: setGolDarah,
    },
  ];
  const btnFN = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "datasiswa"), {
        nama,
        usia,
        tempatTanggalLahirAnak,
        agama,
<<<<<<< HEAD
        hobi,
        gol,
        asalTK,
        tinggalBersama,
        jumlahSaudara,
        anakke,
=======
        alamat,
>>>>>>> parent of e3343a4 (menambahkan terbaru)
        namaAyah,
        namaIbu,
        alamatOrangTua,
        pekerjaanAyah,
<<<<<<< HEAD
        tempatTanggalLahir,
        penghasilan,
        golDarah,
=======
>>>>>>> parent of e3343a4 (menambahkan terbaru)
      });
      if (docRef.id) {
        Swal.fire({
          title: "Berhasil!",
          text: "Data Berhasil Dikirim",
          icon: "success",
          confirmButtonText: "Lanjutkan",
        });
        setNama("");
        setUsia("");
        setTempatTanggalLahirAnak("");
        setAgama("");
        setHobi("");
        setGol("");
        setAsalTK("");
        setTinggalBersama("");
        setJumlahSaudara("");
        setAnakke("");
        setAlamat("");
        setNamaAyah("");
<<<<<<< HEAD
=======
        setNamaIbu("");
>>>>>>> parent of e3343a4 (menambahkan terbaru)
        setAlamatOrangTua("");
        setPekerjaanAyah("");
        setTempatTanggalLahir("");
        setPenghasilan("");
        setGolDarah("");
      }
    } catch (error) {
      Swal.fire({
        title: "Gagal!",
        text: "Data Gagal Dikirim",
        icon: "error",
        confirmButtonText: "Batalkan",
      });
    }
  };

  return (
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
          className="rounded-lg shadow-lg bg-blue-500 w-32 h-10 text-gray-200 cursor-pointer"
        >
          Kirim Data
        </button>
      </div>
    </div>
  );
};

export default Input;
