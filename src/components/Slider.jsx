import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { EffectFade } from "swiper/modules";
import { useEffect } from "react";
import Aos from "aos";

const Slider = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={1}
      centeredSlides={true}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade]}
      effect="fade"
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: false }}
    >
      <SwiperSlide className="swiper-slider">
        <img
          src=".\img\carosul1.jpg"
          alt=""
          style={{ width: "100%", maxHeight: "100vh" }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src=".\img\carosul2jpg.jpg"
          alt=""
          style={{ width: "100%", maxHeight: "100vh" }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src=".\img\carusol3.jpg"
          alt=""
          style={{ width: "100%", maxHeight: "100vh" }}
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
