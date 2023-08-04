import Image from "next/image";

const ShopCard = ({ imgSrc, name, description, price, weight }) => {
  return (
    <li className="shop__item">
      <Image
        src={imgSrc}
        alt={name}
        className="shop__img"
        width={260}
        height={260}
      />
      <h3 className="shop__name">{name}</h3>
      <p className="shop__txt">{description}</p>

      <div className="shop__help">
        <p className="shop__price">{price}</p>
        <p className="shop__grm">{weight}</p>
      </div>

      <button className="shop__btn btn">Buy</button>
    </li>
  );
};

export default ShopCard;
