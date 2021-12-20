import LabelTitle from "components/TemplateAdmin/LabelTitle";
import TableSiswa from "components/TemplateAdmin/TableSiswa";
import React from "react";

const DashSiswa = () => {
  return (
    <div className="bg-gray-100 w-full">
      <LabelTitle judul="Siswa" />
      <h2 className="text-gray-400 text-center font-semibold mt-10 lg:text-2xl">
        Table Lengkap Data Siswa Baru
      </h2>
      <div className="overflow-x-auto">
        <TableSiswa />
      </div>
    </div>
  );
};

export default DashSiswa;
