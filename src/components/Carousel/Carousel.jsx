import React, { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Carousel.css";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

import slide1 from "../../assets/slide1.jpg";
import slide2 from "../../assets/slide2.jpg";
import slide3 from "../../assets/slide3.jpg";
import slide4 from "../../assets/slide4.jpg";

import s1mob from "../../assets/slide1-mob.jpg";
import s2mob from "../../assets/slide2-mob.jpg";
import s3mob from "../../assets/slide3-mob.jpg";
import s4mob from "../../assets/slide4-mob.jpg";

function Carousel() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className="desk-slide" src={slide2} alt="" />
          <img className="mob-slide" src={s2mob} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="desk-slide" src={slide1} alt="" />
          <img className="mob-slide" src={s1mob} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="desk-slide" src={slide3} alt="" />
          <img className="mob-slide" src={s3mob} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="desk-slide" src={slide4} alt="" />
          <img className="mob-slide" src={s4mob} alt="" />
        </SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}

export default Carousel;
