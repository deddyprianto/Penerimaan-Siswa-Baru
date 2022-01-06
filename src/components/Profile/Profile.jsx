import React, { useState, useRef } from "react";

const Profile = ({ data }) => {
  const inputRef = useRef(null);
  const [dataAwal, setDataAwal] = useState(data);
  const [dataFilter, setDataFilter] = useState([]);

  const fnData = () => {
    const inputan = Number(inputRef.current.value);
    setDataFilter(data.filter((da) => da.id === inputan));
  };
  const fnDesc = () => {
    const arrData = [];
    const dataShallowCopy = Object.assign(arrData, dataAwal);
    setDataAwal(dataShallowCopy.sort((a, b) => b.id - a.id));
  };
  return (
    <div className="bg-gray-700 w-full flex justify-center items-center flex-col">
      <input
        ref={inputRef}
        className="w-1/2 rounded-lg h-10"
        type="Masukkan Pencarian Data Anda Disini"
      />
      <button
        onClick={fnData}
        className="text-gray-200 w-56 h-10 m-2  bg-blue-500 rounded text-xl"
      >
        Cari data
      </button>
      <button
        onClick={fnDesc}
        className="text-gray-200 w-64 h-10 m-2  bg-blue-500 rounded text-lg"
      >
        Urutkan Data Dengan Menurun
      </button>
      <div className="w-1/2 h-1/2 bg-white shadow-lg rounded-lg flex justify-center items-center flex-col overflow-y-auto p-10">
        {dataFilter.length >= 1
          ? dataFilter.map((d, i) => {
              return (
                <React.Fragment key={i}>
                  <h1 className="text-gray-400 text-lg">{d.title}</h1>
                  <p className="text-gray-300 text-sm">{d.body}</p>
                </React.Fragment>
              );
            })
          : dataAwal.map((data, i) => {
              return (
                <React.Fragment key={i}>
                  <h1 className="text-gray-400 text-lg">{data.title}</h1>
                  <p className="text-gray-300 text-sm">{data.body}</p>
                </React.Fragment>
              );
            })}
      </div>
    </div>
  );
};

export default Profile;
