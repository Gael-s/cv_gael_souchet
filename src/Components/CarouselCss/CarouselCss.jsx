import React from 'react'

import "./CarouselCss.scss"

import img1 from "./Images_carousel/1.png";
import img2 from "./Images_carousel/2.png";
import img3 from "./Images_carousel/3.png";
import img4 from "./Images_carousel/4.png";
import img5 from "./Images_carousel/5.png";
import img6 from "./Images_carousel/6.png";
import img7 from "./Images_carousel/7.png";
import img8 from "./Images_carousel/8.png";


function CarouselCss() {
    let angle = 0;
    const carousel = (sign) => {
        const spinner=document.getElementsByClassName("carousel");
        console.log(spinner);
        if (!sign) {
            angle = angle + 60
        } else {
            angle = angle -60
        }
        // spinner[0].style.transform = "rotateY("+ angle +"deg);"
    }

    return (
        <div>
            <div className='carousel_diapo'>
                <input checked id="carou_un" name="rotation" type="radio" />
                    <label for="carou_un"></label>
                <input id="carou_deux" name="rotation" type="radio" />
                    <label for="carou_deux"></label>
                <input id="carou_trois" name="rotation" type="radio" />
                    <label for="carou_trois"></label>
                <input id="carou_quatre" name="rotation" type="radio" />
                    <label for="carou_quatre"></label>
                <input id="carou_cinq" name="rotation" type="radio" />
                    <label for="carou_cinq"></label>
                <input id="carou_six" name="rotation" type="radio" />
                    <label for="carou_six"></label>
                <input id="carou_sept" name="rotation" type="radio" />
                    <label for="carou_sept"></label>
                <input id="carou_huit" name="rotation" type="radio" />
                    <label for="carou_huit"></label>
                <div className="contenu_carou">
                    <div className="carousel">
                        <img src={img1} alt="archi01"/>
                        <img src={img2} alt="archi02"/>
                        <img src={img3} alt="archi03"/>
                        <img src={img4} alt="archi04"/>
                        <img src={img5} alt="archi05"/>
                        <img src={img6} alt="archi06"/>
                        <img src={img7} alt="archi07"/>
                        <img src={img8} alt="archi08"/>
                    </div>
                </div>
            </div>
            <div className="control">
            <button onClick={carousel('-')}>❮</button>
            <button onClick={carousel('')}>❯</button>
            </div>
        </div>
    )
}

export default CarouselCss
