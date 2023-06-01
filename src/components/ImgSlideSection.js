import React from "react";
import "./Styles/ImgSlideSection.css";

import { Pagination, Scrollbar, A11y, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import { imageSlider } from "../data";

function ImgSlideSection() {
  return (
    <div>
      {imageSlider.map((image) => {
        return (
          <div key={image.id}>
            <Swiper
              // install Swiper modules
              modules={[Autoplay, Pagination, Scrollbar, A11y]}
              spaceBetween={60}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 1500,
              }}
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
            >
              <SwiperSlide className="swiper">
                <img className="image1" src={image.ImageSlide} alt="" />
              </SwiperSlide>
              <SwiperSlide className="swiper">
                <img className="image1" src={image.ImageSlide2} alt="" />
              </SwiperSlide>
              <SwiperSlide className="swiper">
                <img className="image1" src={image.ImageSlide3} alt="" />
              </SwiperSlide>
              <SwiperSlide className="swiper">
                <img className="image1" src={image.ImageSlide4} alt="" />
              </SwiperSlide>
              <SwiperSlide className="swiper">
                <img className="image1" src={image.ImageSlide5} alt="" />
              </SwiperSlide>
            </Swiper>
            <div className="slide-container">
              <div className="slide-text">
                <h1> {image.SlideText} </h1>
                <h3> {image.SlideTexts} </h3>
                <p>{image.SlideDesc}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ImgSlideSection;
