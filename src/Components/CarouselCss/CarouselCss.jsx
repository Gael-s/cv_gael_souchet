import React, { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";

import "./CarouselCss.scss";

import img1 from "./Images_carousel/1.jpg";
import img2 from "./Images_carousel/2.jpg";
import img3 from "./Images_carousel/3.jpg";
import img4 from "./Images_carousel/4.jpg";
import img5 from "./Images_carousel/5.jpg";
import img6 from "./Images_carousel/6.jpg";
import img7 from "./Images_carousel/7.jpg";
import img8 from "./Images_carousel/8.jpg";

function CarouselCss() {
  useEffect(() => {
    Aos.init({ duration: 3000, anchorPlacement: "center-center", delay: 250 });
  }, []);

  return (
    <>
      <div className="container__descriptif__archi">
        <h3>Logiciels utilisés : </h3>
        <ul>
          <li>Twinmotion</li>
          <li>Archicad</li>
        </ul>
        <h3>Description de l'offre : </h3>
        <ul>
          <li>
            Production d'images Rendu réaliste en vue d'alimenter des offres
            commerciales
          </li>
          <li>
            Accompagnement dans les démarches d'obtention de permis de
            construire
          </li>
        </ul>
      </div>
      <div className="container__image">
        <img
          data-aos="flip-left"
          src={img1}
          alt="archi01"
        />
        <img
          data-aos="flip-right"
          src={img2}
          alt="archi02"
        />
        <img
          data-aos="flip-left"
          src={img3}
          alt="archi03"
        />
        <img
          data-aos="flip-right"
          src={img4}
          alt="archi04"
        />
        <img
          data-aos="flip-left"
          src={img5}
          alt="archi05"
        />
        <img
          data-aos="flip-right"
          src={img6}
          alt="archi06"
        />
        <img
          data-aos="flip-left"
          src={img7}
          alt="archi07"
        />
        <img
          data-aos="flip-right"
          src={img8}
          alt="archi08"
        />
      </div>
    </>
  );
}

export default CarouselCss;
