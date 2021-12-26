import React from "react";

const Contact = () => {
  return (
    <div className="bg-blue-400 mt-10 h-52 flex flex-col justify-start items-center">
      <h1 className="text-gray-300 text-2xl semi-bold">
        Contact dan Panggil kami
      </h1>
      {/* input */}
      <div className="w-full h-4/5 flex justify-center items-center">
        <div className="bg-gray-200 rounded-xl w-2/4 h-14">
          <input
            type="text"
            placeholder="sekolahgetsemane@gmail.com"
            className="text-center w-full h-full rounded-xl outline-none"
          />
        </div>
        <button className="rounded-lg bg-blue-500 h-10 w-20 ml-6 text-gray-100">
          Kirim
        </button>
      </div>
    </div>
  );
};

export default Contact;
