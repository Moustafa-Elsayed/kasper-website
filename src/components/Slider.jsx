import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./Slider.css";

import { useEffect } from "react";
import Aos from "aos";

const Slider = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Swiper
    spaceBetween={30}
    slidesPerView={1}
    centeredSlides={true}
    autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }}
    pagination={{
      clickable: true,
    }}
    navigation={true}
    modules={[Autoplay, Pagination, Navigation]}
    className="mySwiper"
    scrollbar={{ draggable: true }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log("slide change")}
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
