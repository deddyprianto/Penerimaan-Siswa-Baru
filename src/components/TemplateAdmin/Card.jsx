import React, { useEffect, useState } from "react";
import {
  UserGroupIcon,
  BookOpenIcon,
  ClipboardListIcon,
  AcademicCapIcon,
} from "@heroicons/react/outline";
import Shimmer from "react-shimmer-effect";

const CardGuru = () => {
  const [shimmerMe, setShimmerMe] = useState(true);
  useEffect(() => {
    let clean = setTimeout(() => {
      setShimmerMe(false);
    }, 3000);
    return () => clearTimeout(clean);
  }, []);
  return (
    <div className="w-full h-96  grid grid-cols-1 grid-rows-4 items-center justify-items-center md:grid-cols-2 md:grid-rows-2">
      {/* card */}
      {shimmerMe ? (
        <React.Fragment>
          <div className="flex justify-center items-center  w-11/12 h-full md:w-9/12">
            <Shimmer>
              <div className="shadow-lg rounded bg-white flex flex-col items-center justify-evenly w-full h-24">
                {/* <UserGroupIcon className="h-10 w-10 text-green-300" /> */}
              </div>
            </Shimmer>
          </div>
          <div className="flex justify-center items-center  w-11/12 h-full md:w-9/12">
            <Shimmer>
              <div className="shadow-lg rounded bg-white flex flex-col items-center justify-evenly w-full h-24">
                {/* <UserGroupIcon className="h-10 w-10 text-green-300" /> */}
              </div>
            </Shimmer>
          </div>
          <div className="flex justify-center items-center  w-11/12 h-full md:w-9/12">
            <Shimmer>
              <div className="shadow-lg rounded bg-white flex flex-col items-center justify-evenly w-full h-24">
                {/* <UserGroupIcon className="h-10 w-10 text-green-300" /> */}
              </div>
            </Shimmer>
          </div>
          <div className="flex justify-center items-center  w-11/12 h-full md:w-9/12">
            <Shimmer>
              <div className="shadow-lg rounded-lg bg-white flex flex-col items-center justify-evenly w-full h-24">
                {/* <UserGroupIcon className="h-10 w-10 text-green-300" /> */}
              </div>
            </Shimmer>
          </div>
        </React.Fragment>
      ) : (
        <>
          <div className="flex justify-center items-center  w-11/12 h-full md:w-9/12 ">
            <div className="shadow-lg rounded-lg bg-white flex flex-col items-center justify-evenly w-full h-5/6">
              <h3 className="text-gray-300 font-bold text-sm lg:text-xl text-center">
                Jumlah Guru yang aktive: 23 Guru
              </h3>
              <UserGroupIcon className="h-10 w-10 text-green-300" />
            </div>
          </div>
          <div className="flex justify-center items-center w-11/12  h-full md:w-9/12">
            <div className="shadow-lg rounded-lg bg-white flex flex-col items-center justify-evenly w-full h-5/6">
              <h3 className="text-gray-300 font-bold text-sm lg:text-xl text-center">
                Jumlah Mata Pelajaran Guru yang aktive: 23
              </h3>
              <BookOpenIcon className="h-10 w-10 text-green-300" />
            </div>
          </div>
          <div className="flex justify-center items-center w-11/12 h-full md:w-9/12">
            <div className="shadow-lg rounded-lg bg-white flex flex-col items-center justify-evenly  h-5/6 w-full">
              <h3 className="text-gray-300 font-bold text-sm lg:text-xl">
                Jadwal Guru yang berlaku: 7
              </h3>
              <ClipboardListIcon className="h-10 w-10 text-green-300" />
            </div>
          </div>
          <div className="flex justify-center items-center w-11/12  h-full md:w-9/12">
            <div className="shadow-lg rounded-lg bg-white flex flex-col items-center justify-evenly w-full h-5/6">
              <h3 className="text-gray-300 font-bold text-sm lg:text-xl">
                Jumlah Guru yang aktive: 23
              </h3>
              <AcademicCapIcon className="h-10 w-10 text-green-300" />
            </div>
          </div>
        </>
      )}

      {/* end Card */}
    </div>
  );
};

export default CardGuru;
