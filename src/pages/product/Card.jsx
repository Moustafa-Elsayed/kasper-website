import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./card.css";

const Card = () => {
  const ReduxData = useSelector((state) => state.product.data);
  console.log(ReduxData, "from card");
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
      scrollbar={{ draggable: true,hide:"false" }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {ReduxData.map((product) => (
        <SwiperSlide key={product.id} className="swiper-container">
          <img
            src={product.image}
            alt=""
            style={{ maxWidth: "30%", maxHeight: "20vh" }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Card;
