import React from "react";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const SlideShowImg = () => {
  const slideImage = [
    "https://assets-a1.kompasiana.com/statics/files/14252289631199047237.jpg",
    "https://tabloidsinartani.com/uploads/news/images/770x413/-_190409171240-185.jpg",
    "https://s.kaskus.id/r540x540/images/2017/11/27/9868774_20171127030651.jpg",
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
