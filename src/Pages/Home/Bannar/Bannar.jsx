import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import slide1 from "../../../assets/slide1.png";
import slide2 from "../../../assets/slide2.png";
import slide3 from "../../../assets/slide3.png";
import slide4 from "../../../assets/slide4.png";
import slide5 from "../../../assets/slide5.png";

const Bannar = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="sliderImg relative">
          <img className="w-full h-[700px] object-cover" src={slide1} alt="" />
          <div className="slideContent flex items-center justify-center z-30 absolute w-full h-full bg-black bg-opacity-50 left-0 top-0">
            <h2 className="text-6xl text-white font-semibold">Ice Hockey</h2>
          </div>
        </div>
        <div className="sliderImg relative">
          <img className="w-full h-[700px] object-cover" src={slide2} alt="" />
          <div className="slideContent flex items-center justify-center z-30 absolute w-full h-full bg-black bg-opacity-50 left-0 top-0">
            <h2 className="text-6xl text-white font-semibold">Tennis </h2>
          </div>
        </div>
        <div className="sliderImg relative">
          <img className="w-full h-[700px] object-cover" src={slide3} alt="" />
          <div className="slideContent flex items-center justify-center z-30 absolute w-full h-full bg-black bg-opacity-50 left-0 top-0">
            <h2 className="text-6xl text-white font-semibold">Golf </h2>
          </div>
        </div>
        <div className="sliderImg relative">
          <img className="w-full h-[700px] object-cover" src={slide4} alt="" />
          <div className="slideContent flex items-center justify-center z-30 absolute w-full h-full bg-black bg-opacity-50 left-0 top-0">
            <h2 className="text-6xl text-white font-semibold">Basketball </h2>
          </div>
        </div>
        <div className="sliderImg relative">
          <img className="w-full h-[700px] object-cover" src={slide5} alt="" />
          <div className="slideContent flex items-center justify-center z-30 absolute w-full h-full bg-black bg-opacity-50 left-0 top-0">
            <h2 className="text-6xl text-white font-semibold">Baseball </h2>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Bannar;
