/* eslint-disable react/no-unknown-property */
import React, { useEffect, useState } from "react";
import Input from "../Pendaftaran/Input";
import Shimmer from "react-shimmer-effect";

const Pendaftaran = () => {
  const [shimmer, setShimmer] = useState(true);
  useEffect(() => {
    let cleanTimeOut = setTimeout(() => {
      setShimmer(false);
    }, 3000);
    return () => {
      clearTimeout(cleanTimeOut);
    };
  }, []);
  return (
    <div className="h-full relative">
      {shimmer ? (
        <div className="h-3/4 flex flex-col justify-start items-center ">
          {/* Shimmer Nama Input */}
          <div className="w-full flex justify-center items-center h-10">
            <Shimmer>
              <div className="w-1/2 h-7 rounded-2xl lg:w-1/5" />
            </Shimmer>
          </div>
          {/* END Shimmer Nama Input */}

          <div className="flex flex-col items-center w-full h-full justify-center mt-2 lg:w-1/2 lg:flex-row lg:h-1/2 lg:items-start ">
            {/* Shimmer Kotak 1*/}
            <div className="bg-gray-50 w-4/5 h-4/5 rounded flex flex-col justify-evenly items-center mb-2 lg:mb-0 lg:mr-2">
              <Shimmer>
                <div className="w-4/5 h-10 rounded-lg lg:w-5/6" />
                <div className="w-4/5 h-10 rounded-lg lg:w-5/6" />
                <div className="w-4/5 h-10 rounded-lg lg:w-5/6" />
                <div className="w-4/5 h-10 rounded-lg lg:w-5/6" />
                <div className="w-4/5 h-10 rounded-lg lg:w-5/6" />
              </Shimmer>
            </div>
            {/* END Shimmer Kotak 1 */}
            {/* Shimmer Kotak 2 */}
            <div className="bg-gray-50 w-4/5 h-4/5 rounded flex flex-col justify-evenly items-center ">
              <Shimmer>
                <div className="w-4/5 h-10 rounded-lg lg:w-5/6" />
                <div className="w-4/5 h-10 rounded-lg lg:w-5/6" />
                <div className="w-4/5 h-10 rounded-lg lg:w-5/6" />
                <div className="w-4/5 h-10 rounded-lg lg:w-5/6" />
                <div className="w-4/5 h-6 rounded-2xl lg:w-5/6" />
              </Shimmer>
            </div>
            {/* END Shimmer Kotak 2 */}
          </div>
        </div>
      ) : (
        <Input />
      )}
      {/* SVG */}
      <div className="w-full absolute bottom-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#60A5FA"
            fillOpacity="1"
            d="M0,32L720,256L1440,96L1440,320L720,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Pendaftaran;
