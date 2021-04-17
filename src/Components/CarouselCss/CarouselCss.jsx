import React, { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";

import "./CarouselCss.scss";

import img1 from "./Images_carousel/1.png";
import img2 from "./Images_carousel/2.png";
import img3 from "./Images_carousel/3.png";
import img4 from "./Images_carousel/4.png";
import img5 from "./Images_carousel/5.png";
import img6 from "./Images_carousel/6.png";
import img7 from "./Images_carousel/7.png";
import img8 from "./Images_carousel/8.png";

function CarouselCss() {
  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <div className="container__image">
      <img
        data-aos="flip-left"
        data-aos-duration="3000"
        data-aos-anchor-placement="bottom-bottom"
        src={img1}
        alt="archi01"
      />
      <img
        data-aos="flip-right"
        data-aos-duration="3000"
        data-aos-anchor-placement="center-center"
        src={img2}
        alt="archi02"
      />
      <img
        data-aos="flip-left"
        data-aos-duration="3000"
        data-aos-anchor-placement="center-center"
        src={img3}
        alt="archi03"
      />
      <img
        data-aos="flip-right"
        data-aos-duration="3000"
        data-aos-anchor-placement="center-center"
        src={img4}
        alt="archi04"
      />
      <img
        data-aos="flip-left"
        data-aos-duration="3000"
        data-aos-anchor-placement="center-center"
        src={img5}
        alt="archi05"
      />
      <img
        data-aos="flip-right"
        data-aos-duration="3000"
        data-aos-anchor-placement="center-center"
        src={img6}
        alt="archi06"
      />
      <img
        data-aos="flip-left"
        data-aos-duration="3000"
        data-aos-anchor-placement="center-center"
        src={img7}
        alt="archi07"
      />
      <img
        data-aos="flip-right"
        data-aos-duration="3000"
        data-aos-anchor-placement="center-center"
        src={img8}
        alt="archi08"
      />
    </div>
  );
}

export default CarouselCss;
