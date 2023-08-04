import Image from "next/image";

const Review = ({ name, text, photo }) => {
  return (
    <div className="reviews__wrapper">
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
  );
};

export default Review;
