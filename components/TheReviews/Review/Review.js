import Image from "next/image";
import { useState } from "react";

const Review = ({ id, photo, name, text }) => {
  return (
    <div>
      {reviewsCard.map((review) => (
        <div className="reviews__wrapper" key={id}>
          <Image
            className="reviews__photo"
            src={photo}
            alt={name}
            width={100}
            height={100}
          />
          <div className="reviews__content">
            <h3 className="reviews__name">{name}</h3>
            <p className="reviews__txt">{text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Review;
