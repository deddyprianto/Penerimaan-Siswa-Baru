/* eslint-disable react/no-unknown-property */
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { signIn } from "next-auth/client";
import Shimmer from "react-shimmer-effect";

const Login = () => {
  const [shimmer, setShimmer] = useState(true);
  useEffect(() => {
    let clean = setTimeout(() => {
      setShimmer(false);
    }, 3000);
    return () => clearTimeout(clean);
  }, []);
  const btnLogin = (e) => {
    e.preventDefault();
    signIn("google", { callbackUrl: "http://localhost:3000/admin/" });
  };
  return (
    <div className="h-full relative w-full">
      {/* content */}
      {shimmer ? (
        <div className="w-full flex flex-col justify-center items-center h-2/5 ">
          <div className="w-full  flex flex-col justify-center items-center lg:w-1/2 2xl:w-1/4">
            <Shimmer>
              <div className="h-24 w-24 rounded-full" />
              <div className="h-5 w-2/5 mt-2 rounded-xl" />
              <div className="h-5 w-3/5 mt-2 rounded-xl" />
            </Shimmer>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center  h-1/2">
          <h2 className="text-gray-300 text-lg font-bold">
            Halaman Login Admin/Kepala Sekolah
          </h2>
          <Image
            src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
            width={200}
            height={200}
            alt="Logo Google"
            className="shadow-lg rounded-full"
          />
          <button
            className="bg-blue-500 text-white text-lg font-semibold w-48 h-16 rounded-lg mt-6 cursor-pointer active:bg-transparent"
            onClick={btnLogin}
          >
            Login
          </button>
        </div>
      )}

      <div className="w-full absolute bottom-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#3B82F6"
            fillOpacity="1"
            d="M0,32L720,256L1440,96L1440,320L720,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Login;
