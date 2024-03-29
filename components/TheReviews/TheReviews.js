// TheReviews.js
import React from "react";
import "./reviews.css";
import Review from "@/components/TheReviews/Review/Review";
import mydata from "../../data/reviews.json";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import Slider from "../TheSlider/TheSlider";

const TheReviews = () => {
  return (
    <section className="reviews" id="reviews">
      <div className="reviews__container container">
        <h2 className="reviews__title title">Tasting with all five senses</h2>
        <p className="reviews__subtitle">
          We are very sensitive to your feedback, we appreciate your every
          smile, we dream that you would feel the moments of joy while trying
          our chocolate. we believe that tasting our chocolate should be a feast
          for all our senses.
        </p>

        {/* Передайте дані в компонент Review */}
        <Slider reviews={mydata.reviews} />
        {/* <Review reviews={mydata.reviews} /> */}
      </div>
    </section>
  );
};

export { TheReviews };
