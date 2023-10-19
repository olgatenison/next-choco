import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper-bundle.min.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

const Slider = ({ reviews }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {reviews.map((review) => (
        <SwiperSlide key={review.id}>
          <div className="reviews__wrapper">
            <Image
              className="reviews__photo"
              src={review.photo}
              alt={review.name}
              width={100}
              height={100}
            />
            <div className="reviews__content">
              <h3 className="reviews__name">{review.name}</h3>
              <p className="reviews__txt">{review.text}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export { Slider };
