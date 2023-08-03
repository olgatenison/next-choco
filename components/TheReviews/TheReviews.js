"use client";

import Image from "next/image";

import "./reviews.css";
import { useRouter } from "next/navigation";

const TheReviews = () => {
  const router = useRouter();

  return (
    <section class="reviews" id="#reviews">
      <div class="reviews__container container">
        <h2 class="reviews__title title">Tasting with all five senses</h2>
        <p class="reviews__subtitle">
          We are very sensitive to your feedback, we appreciate your every
          smile, we dream that you would feel the moments of joy while trying
          our chocolate. we believe that tasting our chocolate should be a feast
          for all our senses.
        </p>

        <div class="reviews__wrapper">
          <Image
            className="reviews__photo"
            src="/TheReviews/Photo/photo01.png"
            alt="reviews__photo"
            width={100}
            height={100}
          />
          <div class="reviews__content">
            <h3 class="reviews__name">John Smith</h3>
            <p class="reviews__txt">
              I want to send all chocolate lovers to unusual novelties produced
              by the &#34Loretta’s Choco&#34. Here you will find delicacies for
              every taste. We have repeatedly asked for help in preparing gifts
              for managers. All gifts were made carefully, on time and most
              importantly, all our wishes were taken into account! Thank you
              &#34Loretta’s Choco&#34 and we wish you prosperity in our city.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export { TheReviews };
