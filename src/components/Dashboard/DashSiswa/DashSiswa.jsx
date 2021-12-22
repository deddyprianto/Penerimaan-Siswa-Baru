import LabelTitle from "components/TemplateAdmin/LabelTitle";
import TableSiswa from "components/TemplateAdmin/TableSiswa";
import React, { useState } from "react";
import { DocumentIcon } from "@heroicons/react/solid";

const DashSiswa = () => {
  // button to make this is easly
  const renderPDF = (e) => {
    e.preventDefault();
  };
  return (
    <div className="bg-red-100 w-full flex flex-col">
      <LabelTitle judul="Siswa" />
      <h2 className="text-gray-400 text-center font-semibold mt-10 lg:text-2xl">
        Table Lengkap Data Siswa Baru
      </h2>
      <div className="overflow-x-auto">
        <TableSiswa />
      </div>
      <button
        onClick={renderPDF}
        className="rounded bg-red-500 w-32 h-14 self-end text-gray-200 flex justify-center items-center mt-10 font-semibold"
      >
        Cetak PDF
        <DocumentIcon className="h-10 w-10 text-white" />
      </button>
    </div>
  );
};

export default DashSiswa;
