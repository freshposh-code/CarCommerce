import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// import css
import "../components/Styles/PreviewSection.css";

import { clientData } from "../data";

function ClientData() {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={60}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide className="card-slider">
        {clientData.map((slider) => {
          return (
            <div className="content-box" key={slider.id}>
              <div className="star-box">
                <i class={slider.starBox}></i>
                <i class={slider.starBox}></i>
                <i class={slider.starBox}></i>
                <i class={slider.starBox}></i>
                <i class={slider.starBox}></i>
              </div>
              <div className="dsh"></div>
              <h4>{slider.sliderDesc}</h4>
              <div className="person-image">
                <img src={slider.sliderImg} alt={slider.name} />
              </div>
              <h3> {slider.name} </h3>
              <div className="dsh"></div>
              <p> {slider.job} </p>
            </div>
          );
        })}
      </SwiperSlide>

      <SwiperSlide className="card-slider">
        {clientData.map((slider) => {
          return (
            <div className="content-box">
              <div className="star-box">
                <i className={slider.starBox}></i>
                <i className={slider.starBox}></i>
                <i className={slider.starBox}></i>
                <i className={slider.starBox}></i>
                <i className={slider.starBox}></i>
              </div>
              <div className="dsh"></div>
              <h4>{slider.sliderDesc2}</h4>
              <div className="person-image">
                <img src={slider.sliderImg2} alt={slider.name} />
              </div>
              <h3> {slider.name2} </h3>
              <div className="dsh"></div>
              <p> {slider.job} </p>
            </div>
          );
        })}
      </SwiperSlide>

      <SwiperSlide className="card-slider">
        {clientData.map((slider) => {
          return (
            <div key={slider.id} className="content-box">
              <div className="star-box">
                <i className={slider.starBox}></i>
                <i className={slider.starBox}></i>
                <i className={slider.starBox}></i>
                <i className={slider.starBox}></i>
                <i className={slider.starBox}></i>
              </div>
              <div className="dsh"></div>
              <h4>{slider.sliderDesc3}</h4>
              <div className="person-image">
                <img src={slider.sliderImg3} alt={slider.name} />
              </div>
              <h3> {slider.name3} </h3>
              <div className="dsh"></div>
              <p> {slider.job} </p>
            </div>
          );
        })}
      </SwiperSlide>
    </Swiper>
  );
}

export default ClientData;
