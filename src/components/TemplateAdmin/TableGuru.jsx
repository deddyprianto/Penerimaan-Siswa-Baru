import React, { useState, useEffect } from "react";
import Shimmer from "react-shimmer-effect";

const TableGuru = () => {
  const [shimmerMe, setShimmerMe] = useState(true);
  useEffect(() => {
    let clean = setTimeout(() => {
      setShimmerMe(false);
    }, 3000);
    return () => clearTimeout(clean);
  }, []);
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
                  <th className="w-56 "></th>
                  <th className="w-56 "></th>
                  <th className="w-56 "></th>
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
          <h2 className="text-gray-400 font-semibold lg:text-2xl mb-10">
            Table Lengkap Data Data Guru
          </h2>
          <table className="table-fixed">
            <thead>
              <tr>
                <th className="w-56 border-b-2">Nama Lengkap Guru</th>
                <th className="w-56 border-b-2">Pendidikan Terakhir</th>
                <th className="w-56 border-b-2">Masa Jabatan</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center border-b-2 h-14">
                <td>Arman Marpaung,M.Pd</td>
                <td>S2</td>
                <td>5 Tahun</td>
              </tr>
              <tr className="text-center border-b-2 h-14">
                <td>Arman Marpaung,M.Pd</td>
                <td>S2</td>
                <td>5 Tahun</td>
              </tr>
              <tr className="text-center border-b-2 h-14">
                <td>Arman Marpaung,M.Pd</td>
                <td>S2</td>
                <td>5 Tahun</td>
              </tr>
              <tr className="text-center border-b-2 h-14">
                <td>Arman Marpaung,M.Pd</td>
                <td>S2</td>
                <td>5 Tahun</td>
              </tr>
              <tr className="text-center border-b-2 h-14">
                <td>Arman Marpaung,M.Pd</td>
                <td>S2</td>
                <td>5 Tahun</td>
              </tr>
              <tr className="text-center border-b-2 h-14">
                <td>Arman Marpaung,M.Pd</td>
                <td>S2</td>
                <td>5 Tahun</td>
              </tr>
              <tr className="text-center border-b-2 h-14">
                <td>Arman Marpaung,M.Pd</td>
                <td>S2</td>
                <td>5 Tahun</td>
              </tr>
              <tr className="text-center border-b-2 h-14">
                <td>Arman Marpaung,M.Pd</td>
                <td>S2</td>
                <td>5 Tahun</td>
              </tr>
              <tr className="text-center border-b-2 h-14">
                <td>Arman Marpaung,M.Pd</td>
                <td>S2</td>
                <td>5 Tahun</td>
              </tr>
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default TableGuru;
