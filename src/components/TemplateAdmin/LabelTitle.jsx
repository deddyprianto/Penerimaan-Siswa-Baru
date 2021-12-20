import React, { useEffect, useState } from "react";
import Shimmer from "react-shimmer-effect";

const LabelTitle = ({ judul }) => {
  const [shimmerMe, setShimmerMe] = useState(true);
  useEffect(() => {
    let clean = setTimeout(() => {
      setShimmerMe(false);
    }, 3000);
    return () => clearTimeout(clean);
  }, []);
  return (
    <div className="w-full h-20 flex justify-center items-start">
      {shimmerMe ? (
        <Shimmer>
          <div className="shadow-lg rounded-lg bg-white h-5/6 w-11/12 flex items-center justify-center mt-4">
            <h1 className="text-gray-400 font-semibold text-sm text-center lg:text-xl" />
          </div>
        </Shimmer>
      ) : (
        <div className="shadow-lg rounded-lg bg-white h-5/6 w-11/12 flex items-center justify-center mt-4">
          <h1 className="text-gray-400 font-semibold text-sm text-center lg:text-xl">
            Selamat Datang di DashBoard{" "}
            {judul === "Home"
              ? judul
              : judul === "Akademik"
              ? judul
              : judul === "Guru"
              ? judul
              : judul === "Siswa"
              ? judul
              : judul === "Berkas"
              ? judul
              : judul}{" "}
            SD Swasta Getsemane Schooll
          </h1>
        </div>
      )}
    </div>
  );
};

export default LabelTitle;
