import React, { useState, useEffect } from "react";
import Shimmer from "react-shimmer-effect";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import db from "firebaseConf";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import { DocumentIcon } from "@heroicons/react/solid";

const TableSiswa = () => {
  const router = useRouter();

  const [data, setData] = useState([]);
  const [shimmerMe, setShimmerMe] = useState(true);
  useEffect(() => {
    let data = getDocs(collection(db, "datasiswa"));
    let dataArr = [];
    data.then((snapshot) => {
      snapshot.forEach((doc) => {
        dataArr.push({ ...doc.data(), id: doc.id });
      });
    });
    setData(dataArr);
  }, []);

  useEffect(() => {
    let clean = setTimeout(() => {
      setShimmerMe(false);
    }, 3000);
    return () => clearTimeout(clean);
  }, []);

  const btnHapus = async (id) => {
    try {
      await deleteDoc(doc(db, "datasiswa", id));
      Swal.fire({
        title: "Berhasil!",
        text: "Data Berhasil Di Hapus",
        icon: "success",
        confirmButtonText: "Tutup",
      });
    } catch (error) {
      Swal.fire({
        title: "Gagal!",
        text: "Data Gagal Dihapus",
        icon: "error",
        confirmButtonText: "Tutup",
      });
    }
  };

  return (
    <div className="flex flex-col justify-center items-center mt-10">
      {shimmerMe ? (
        <>
          <Shimmer>
            <div className="w-1/2 h-12 rounded-lg" />
          </Shimmer>
          <table className="table-fixed">
            <Shimmer>
              <thead className="w-full mt-2 rounded-lg h-12">
                <tr>
                  <th className="w-56"></th>
                  <th className="w-56"></th>
                  <th className="w-56"></th>
                </tr>
              </thead>
            </Shimmer>
            <tbody>
              <Shimmer>
                <tr className="w-full mt-2 rounded-lg h-12">
                  <td className="w-56 "></td>
                  <td className="w-56 "></td>
                  <td className="w-56 "></td>
                </tr>
              </Shimmer>
              <Shimmer>
                <tr className="w-full mt-2 rounded-lg h-12">
                  <td className="w-56 "></td>
                  <td className="w-56 "></td>
                  <td className="w-56 "></td>
                </tr>
              </Shimmer>
              <Shimmer>
                <tr className="w-full mt-2 rounded-lg h-12">
                  <td className="w-56 "></td>
                  <td className="w-56 "></td>
                  <td className="w-56 "></td>
                </tr>
              </Shimmer>
              <Shimmer>
                <tr className="w-full mt-2 rounded-lg h-12">
                  <td className="w-56 "></td>
                  <td className="w-56 "></td>
                  <td className="w-56 "></td>
                </tr>
              </Shimmer>
            </tbody>
          </table>
        </>
      ) : (
        <>
          <table className="table-fixed">
            <thead>
              <tr>
                <th className="w-56 border-b-2">Nama Siswa</th>
                <th className="w-56 border-b-2">Usia</th>
                <th className="w-56 border-b-2">Tanggal Lahir</th>
                <th className="w-56 border-b-2">Agama</th>
                <th className="w-56 border-b-2">Alamat</th>
                <th className="w-56 border-b-2">Nama Ayah</th>
                <th className="w-56 border-b-2">Nama Ibu</th>
                <th className="w-56 border-b-2">Alamat OrangTua</th>
                <th className="w-56 border-b-2">Pekerjaan Ayah</th>
                <th className="w-56 border-b-2">Menu</th>
              </tr>
            </thead>
            <tbody>
              {data.map((data) => (
                <tr key={data.id} className="text-center border-b-2 h-14">
                  <td>{data.nama}</td>
                  <td>{data.usia}</td>
                  <td>{data.tanggalLahir}</td>
                  <td>{data.agama}</td>
                  <td>{data.alamat}</td>
                  <td>{data.namaAyah}</td>
                  <td>{data.namaIbu}</td>
                  <td>{data.alamatOrangTua}</td>
                  <td>{data.pekerjaanAyah}</td>
                  <td>
                    <button
                      className="bg-blue-500 text-gray-100 w-12 h-5 rounded-lg md:w-20 md:h-10 shadow-xl"
                      onClick={() => {
                        router.push(`/admin/siswa/${data.id}`);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-500 text-gray-100 w-12 h-5 rounded-lg md:w-20 md:h-10 shadow-xl"
                      onClick={() => btnHapus(data.id)}
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default TableSiswa;
