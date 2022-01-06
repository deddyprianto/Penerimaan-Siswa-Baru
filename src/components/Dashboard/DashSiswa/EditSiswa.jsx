import React, { useState } from "react";
import { useRouter } from "next/router";
import { doc, updateDoc } from "firebase/firestore";
import db from "firebaseConf";
import Swal from "sweetalert2";

const EditSiswa = ({ data }) => {
  const router = useRouter();
  const [refresh, setRefresh] = useState(false);
  const [nama, setNama] = useState(data.nama);
  const [usia, setUsia] = useState(data.usia);
  const [tempatTanggalLahirAnak, setTempatTanggalLahirAnak] = useState(
    data.tempatTanggalLahirAnak
  );
  const [agama, setAgama] = useState(data.agama);
  const [hobi, setHobi] = useState(data.hobi);
  const [gol, setGol] = useState(data.gol);
  const [asalTK, setAsalTK] = useState(data.asalTK);
  const [tinggalBersama, setTinggalBersama] = useState(data.tinggalBersama);
  const [jumlahSaudara, setJumlahSaudara] = useState(data.jumlahSaudara);
  const [anakke, setAnakke] = useState(data.anakke);

  // form orang Tua
  const [namaAyah, setNamaAyah] = useState(data.namaAyah);
  const [alamatOrangTua, setAlamatOrangTua] = useState(data.alamatOrangTua);
  const [pekerjaanAyah, setPekerjaanAyah] = useState(data.pekerjaanAyah);
  const [tempatTanggalLahir, setTempatTanggalLahir] = useState(
    data.tempatTanggalLahir
  );
  const [penghasilan, setPenghasilan] = useState(data.penghasilan);
  const [golDarah, setGolDarah] = useState(data.golDarah);

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
  // debugging
  console.log("render ulang");
  // end debugging

  const btnFN = async (e) => {
    e.preventDefault();
    try {
      const updateData = doc(db, "datasiswa", data?.id);
      const docRef = await updateDoc(updateData, {
        nama,
        usia,
        tempatTanggalLahirAnak,
        agama,
        hobi,
        gol,
        asalTK,
        tinggalBersama,
        jumlahSaudara,
        anakke,
        namaAyah,
        namaIbu,
        alamatOrangTua,
        pekerjaanAyah,
        tempatTanggalLahir,
        penghasilan,
        golDarah,
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
      console.log(error);
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
