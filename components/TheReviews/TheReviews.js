"use client";

import "./reviews.css";
import Review from "@/components/TheReviews/Review/Review";
import { useRouter } from "next/navigation";

const TheReviews = () => {
  const router = useRouter();

  return (
    <section className="reviews" id="#reviews">
      <div className="reviews__container container">
        <h2 className="reviews__title title">Tasting with all five senses</h2>
        <p className="reviews__subtitle">
          We are very sensitive to your feedback, we appreciate your every
          smile, we dream that you would feel the moments of joy while trying
          our chocolate. we believe that tasting our chocolate should be a feast
          for all our senses.
        </p>

        <Review
          name="John Smith"
          text="I want to send all chocolate lovers to unusual novelties produced by the 'Loretta’s Choco'. Here you will find delicacies for every taste. We have repeatedly asked for help in preparing gifts for managers. All gifts were made carefully, on time and most importantly, all our wishes were taken into account! Thank you 'Loretta’s Choco' and we wish you prosperity in our city."
          photo="/TheReviews/Photo/photo01.png"
        />
      </div>
    </section>
  );
};

export { TheReviews };
