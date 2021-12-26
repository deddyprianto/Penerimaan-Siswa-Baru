import LabelTitle from "components/TemplateAdmin/LabelTitle";
import TableSiswa from "components/TemplateAdmin/TableSiswa";
import React, { useState } from "react";
import { DocumentIcon, EyeIcon } from "@heroicons/react/solid";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";

const DashSiswa = () => {
  const [pdfurl, setPdfurl] = useState("");

  // Button PDF
  const renderPDF = async () => {
    const pdfDOC = await PDFDocument.create();
    const page = pdfDOC.addPage([350, 400]);
    page.moveTo(110, 200);
    page.drawText("Heloo World");
    const pdfDataUri = await pdfDOC.saveAsBase64({ dataUri: true });
    setPdfurl(pdfDataUri);
  };

  console.log(pdfurl);
  return (
    <div className="bg-gray-100 w-full flex flex-col">
      <LabelTitle judul="Siswa" />
      <h2 className="text-gray-400 text-center font-semibold mt-10 lg:text-2xl">
        Table Lengkap Data Siswa Baru
      </h2>
      <div className="overflow-x-auto">
        <TableSiswa />
      </div>
      <button
        onClick={renderPDF}
        className="rounded bg-blue-500 w-20 h-10 lg:w-32 text-sm lg:text-lg lg:h-14 self-end text-gray-200 flex justify-center items-center mt-10 font-semibold"
      >
        Ubah Ke PDF
        <DocumentIcon className="h-7 w-h-7 text-white" />
      </button>
      <a
        className="rounded bg-red-500  w-20 h-10 lg:w-32 text-sm lg:text-lg lg:h-14 self-end text-gray-200 flex justify-center items-center mt-2 font-semibold truncate"
        href={pdfurl}
        target="_blank"
        rel="noreferrer"
      >
        Lihat PDF
        <EyeIcon className="h-7 w-h-7 text-white ml-2" />
      </a>
    </div>
  );
};

export default DashSiswa;
