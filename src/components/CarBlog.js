import React from "react";
import "../components/Styles/CarBlog.css";
import { blog } from "../data";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/autoplay";

// import required modules
import { EffectFlip, Autoplay } from "swiper";

const CarBlog = () => {
  return (
    <>
      <div className="blog-container">
        <div className="blog">
          {blog.map((blog) => {
            return (
              <div className="blog-content" key={blog.id}>
                <div className="image">
                  <Swiper
                    effect={"flip"}
                    grabCursor={true}
                    autoplay={{
                      delay: 2000,
                    }}
                    modules={[EffectFlip, Autoplay]}
                    className="mySwiper"
                  >
                    <SwiperSlide>
                      <img src={blog.BlogImage} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={blog.BlogImage2} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={blog.BlogImage3} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={blog.BlogImage4} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={blog.BlogImage5} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={blog.BlogImage6} alt="" />
                    </SwiperSlide>
                  </Swiper>
                </div>
                <div className="blog-concept">
                  <h2>{blog.BlogText}</h2>
                  <p>{blog.BlogDesc}</p>
                  <button>{blog.BlogLink}</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CarBlog;
