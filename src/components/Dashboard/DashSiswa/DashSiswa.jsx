import React, { useState, useEffect } from "react";
import LabelTitle from "components/TemplateAdmin/LabelTitle";
import TableSiswa from "components/TemplateAdmin/TableSiswa";
import { DocumentIcon, EyeIcon } from "@heroicons/react/solid";
import { PDFDocument, StandardFonts, rgb, PageSizes } from "pdf-lib";
import Swal from "sweetalert2";
import { getDocs, collection } from "firebase/firestore";
import db from "../../../firebaseConf";

const DashSiswa = () => {
  const [pdfurl, setPdfurl] = useState("");
  const [showLoading, setshowLoading] = useState(false);
  useEffect(() => {
    const cleanTime = setTimeout(() => {
      setshowLoading(false);
    }, 3000);
    return () => {
      clearTimeout(cleanTime);
    };
  }, [showLoading]);
  // Button PDF

  const renderPDF = async () => {
    setshowLoading(true);
    let dataFinal = [];
    let data = getDocs(collection(db, "datasiswa"));
    const dataObj = await data;
    dataObj.forEach((data) => {
      dataFinal.push({ ...data.data(), id: data.id });
    });
    // get PDF
    const pdfDOC = await PDFDocument.create();
    const form = pdfDOC.getForm();
    const page = pdfDOC.addPage(PageSizes.Letter);
    const { width, height } = page.getSize();
    const fontSize = 30;
    page.drawText("Nama Siswa Baru SD Swasta Getsemane:", {
      x: 50,
      y: height - 4 * fontSize,
      size: fontSize,
      color: rgb(0, 0.53, 0.71),
    });

    const personField = form.createOptionList("favorite.person");
    personField.addOptions(dataFinal.map((data) => data.nama));
    personField.select("Deddy Prianto");
    personField.addToPage(page, { x: 20, y: 520, width: 400, height: 40 });

    const pdfDataUri = await pdfDOC.saveAsBase64({ dataUri: true });
    Swal.fire({
      title: "Berhasil!",
      text: "Heloo",
      icon: "success",
      confirmButtonText: "Tutup",
    });
    setPdfurl(pdfDataUri);
  };

  return (
    <div className="w-full flex flex-col">
      <LabelTitle judul="Siswa" />
      <h2 className="text-gray-400 text-center font-semibold mt-10 lg:text-2xl">
        Table Lengkap Data Siswa Baru
      </h2>
      <div className="overflow-x-auto">
        <TableSiswa />
      </div>
      <button
        onClick={renderPDF}
        className="rounded bg-blue-500 w-16 h-10 lg:w-32 text-sm lg:text-sm lg:h-14 self-end text-gray-200 flex justify-center items-center mt-10 font-semibold"
      >
        Ubah Ke PDF
        {showLoading ? (
          <svg
            className="animate-spin h-5 w-5 mr-3 bg-white rounded"
            viewBox="0 0 24 24"
          ></svg>
        ) : (
          <DocumentIcon className="h-7 w-h-7 text-white" />
        )}
      </button>
      <a
        className="rounded bg-red-500  w-16 h-10 lg:w-32 text-sm lg:text-sm lg:h-14 self-end text-gray-200 flex justify-center items-center mt-2 font-semibold truncate"
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
