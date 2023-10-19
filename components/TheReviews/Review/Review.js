import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination } from "swiper/modules";

import Image from "next/image";

export default function Review({ reviews }) {
  return (
    <div>
      {reviews.map((review) => (
        <div className="reviews__wrapper" key={review.id}>
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
      ))}
    </div>
  );
}
