import React, { useLayoutEffect, useState } from "react";
import About from "./About";
import Feature from "./Feature";
import SlideShowImg from "./SlideShowImg";
import Shimmer from "react-shimmer-effect";
import Contact from "./Contact";

const Home = () => {
  const [showShimmerq, setShowShimmerq] = useState(true);
  useLayoutEffect(() => {
    let cleanEffect = setTimeout(() => {
      setShowShimmerq(false);
    }, 3000);
    return () => {
      clearTimeout(cleanEffect);
    };
  }, []);

  return (
    <React.Fragment>
      {showShimmerq ? (
        <div className="w-full flex flex-col justify-start items-center h-full">
          <Shimmer>
            <div className="w-11/12 rounded-xl h-24" />
            <div className="w-11/12 rounded-xl h-24" />
            <div className="w-11/12 rounded-xl h-24" />
          </Shimmer>
          <Shimmer>
            <div className="w-1/2 rounded-lg h-3 mt-5 lg:h-5" />
            <div className="w-5/12 rounded-lg h-3 mt-5 lg:h-5" />
            <div className="w-5/12 rounded-lg h-3 mt-5 lg:h-5" />
          </Shimmer>

          <div className="flex w-full justify-center items-center mt-2 rounded-xl">
            <div className="flex justify-evenly items-center w-3/12 h-48 bg-gray-100">
              <Shimmer>
                <div className="rounded-full w-24 h-24" />
              </Shimmer>
            </div>
            <div className="flex flex-col justify-center items-start w-1/3 h-48 bg-gray-100">
              <Shimmer>
                <div className="w-5/6 rounded-lg h-3 mt-5" />
                <div className="w-1/2 rounded-lg h-3 mt-5" />
                <div className="mt-5 w-5/6 rounded-lg h-3" />
              </Shimmer>
            </div>
          </div>
        </div>
      ) : (
        <React.Fragment>
          <SlideShowImg />
          <About />
          <Feature />
          <Contact />
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default Home;
