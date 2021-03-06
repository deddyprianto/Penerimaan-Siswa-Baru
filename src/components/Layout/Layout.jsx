import React, { useState, useLayoutEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useSelector, useDispatch } from "react-redux";
import { LockClosedIcon } from "@heroicons/react/solid";
import { actionshowMenuSlide } from "../../features/app/appSlice";
import Link from "next/link";
import Loading from "../../img/loading.gif";
import Image from "next/image";

const Layout = ({ children }) => {
  console.log("component layout");
  const [showLoadingBar, setShowLoadingBar] = useState(true);
  const dispatch = useDispatch();
  const { show } = useSelector((state) => state.app.showButtoMenu);
  const li = [
    { list: "Home", link: "/" },
    { list: "Pendaftaran", link: "/pendaftaran" },
    { list: "Galery", link: "/galery" },
    { list: "Profile", link: "/profile" },
    { list: "Hubungi Kami", link: "/contact" },
  ];

  // show loading bar
  useLayoutEffect(() => {
    const clean = setTimeout(() => {
      setShowLoadingBar(false);
    }, 3000);
    return () => {
      clearTimeout(clean);
    };
  }, []);

  return (
    <>
      {showLoadingBar ? (
        <div className=" bg-white w-screen h-screen z-50 flex justify-center items-center">
          <Image src={Loading} width={300} height={300} />
        </div>
      ) : (
        <div className="h-screen grid grid-rows-8">
          {show && (
            <div className="h-full w-2/5 absolute left-0 bg-blue-500 z-50 animate-wiggle flex flex-col">
              <ul className="grid grid-row-5 h-full place-content-center">
                {li.map((data, key) => (
                  <li
                    key={key}
                    className="text-gray-200 text-lg h-20 justify-self-center"
                  >
                    <Link href={data.link}>{data.list}</Link>
                  </li>
                ))}
              </ul>
              <div
                className="grid grid-cols-2 cursor-pointer"
                onClick={() => dispatch(actionshowMenuSlide({ show: false }))}
              >
                <p className="text-sm text-gray-200 self-center justify-self-end">
                  Close
                </p>
                <LockClosedIcon className="w-5 h-5 text-gray-200 self-center justify-self-start" />
              </div>
            </div>
          )}
          <Navbar />
          {children}
        </div>
      )}
    </>
  );
};

export default Layout;
