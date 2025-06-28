import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import bannerImg1 from "../../../../public/assets/banner1.jpg";
import bannerImg2 from "../../../../public/assets/banner2.jpg";
import bannerImg3 from "../../../../public/assets/banner3.jpg";

const Slider1 = () => {
  return (
    <div className="">
      <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false}>
        {/* Slider-1 */}
        <div className="h-full">
          <img className="h-full" src={bannerImg1} />
        </div>
        {/* Slider-2 */}
        <div>
          <img className="h-full" src={bannerImg2} />
        </div>
        {/* Slider-3 */}
        <div>
          <img className="h-full" src={bannerImg3} />
        </div>
      </Carousel>
    </div>
  );
};

export default Slider1;
