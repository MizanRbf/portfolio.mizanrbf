import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import ProSlider1 from "../../../../src/assets/Pro1,Slid1.png";
import ProSlider2 from "../../../../src/assets/Pro1,Slid2.png";
import ProSlider3 from "../../../../src/assets/Pro1,Slid3.png";
import ProSlider4 from "../../../../src/assets/Pro1,Slid4.png";

const Slider1 = () => {
  return (
    <div className="w-full aspect-video overflow-hidden">
      <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false}>
        {/* Slider-1 */}
        <div className="">
          <img className="w-full h-full object-cover" src={ProSlider1} />
        </div>
        {/* Slider-2 */}
        <div className="">
          <img className="w-full h-full object-cover" src={ProSlider2} />
        </div>
        {/* Slider-3 */}
        <div className="">
          <img className="w-full h-full object-cover" src={ProSlider3} />
        </div>
        {/* Slider-4 */}
        <div className="">
          <img className="w-full h-full object-cover" src={ProSlider4} />
        </div>
      </Carousel>
    </div>
  );
};

export default Slider1;
