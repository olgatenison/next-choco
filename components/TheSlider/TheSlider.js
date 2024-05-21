import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles

// import required modules
import { Pagination } from "swiper/modules";

import "./slider.css";
import Review from "../TheReviews/Review/Review";

const Slider = ({ reviews }) => {
  console.log({ reviews });
  return (
    <Swiper
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      {reviews.map((review) => (
        <SwiperSlide key={review.id}>
          <Review reviews={[review]} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
