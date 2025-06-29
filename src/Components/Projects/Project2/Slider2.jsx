import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import ProSlider1 from "../../../../public/assets/Pro2,Slid1.png";
import ProSlider2 from "../../../../public/assets/Pro2,Slid2.png";
import ProSlider3 from "../../../../public/assets/Pro2,Slid3.png";
import ProSlider4 from "../../../../public/assets/Pro2,Slid4.png";

const Slider2 = () => {
  return (
    <div className="h-full">
      <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false}>
        {/* Slider-1 */}
        <div className="h-full">
          <img className="h-full" src={ProSlider1} />
        </div>
        {/* Slider-2 */}
        <div className="h-full">
          <img className="h-full" src={ProSlider2} />
        </div>
        {/* Slider-3 */}
        <div className="h-full">
          <img className="h-full" src={ProSlider3} />
        </div>
        {/* Slider-4 */}
        <div className="h-full">
          <img className="h-full" src={ProSlider4} />
        </div>
      </Carousel>
    </div>
  );
};

export default Slider2;
