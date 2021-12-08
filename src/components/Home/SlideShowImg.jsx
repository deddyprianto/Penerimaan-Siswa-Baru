import React from "react";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const SlideShowImg = () => {
  const slideImage = [
    "https://assets-a1.kompasiana.com/statics/files/14252289631199047237.jpg",
    "https://assets-a1.kompasiana.com/statics/files/14252289631199047237.jpg",
    "https://assets-a1.kompasiana.com/statics/files/14252289631199047237.jpg",
  ];
  const zoomInProperties = {
    scale: 1.4,
  };
  return (
    <Zoom {...zoomInProperties}>
      {slideImage.map((each, index) => (
        <div key={index} style={{ width: "100%", height: "100%" }}>
          <img
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
            src={each}
          />
        </div>
      ))}
    </Zoom>
  );
};

export default SlideShowImg;
