"use client";
import React, { useContext } from "react";
import { CustomContext } from "../../../app/context/index";
import Image from "next/image";
import Link from "next/link";

const ShopCard = ({ product, addToBag }) => {
  const { id, imgSrc, name, description, price, weight } = product;
  const { value, setValue } = useContext(CustomContext);

  function addProductToBasket(product) {
    setValue([...value, product]);
  }

  return (
    <li className="shop__item">
      <Link href={"/shop/" + id}>
        <Image
          src={imgSrc}
          alt={name}
          className="shop__img"
          width={260}
          height={260}
        />
      </Link>
      <h3 className="shop__name">
        <Link href={"/shop/" + id}>{name}</Link>
      </h3>
      <p className="shop__txt">{description}</p>
      <Link href={"/shop/" + id} className="shop__more">
        Read more...
      </Link>
      <div className="shop__help">
        <p className="shop__price">{price} €</p>
        <p className="shop__grm">{weight}</p>
      </div>

      <button
        className="shop__btn btn"
        onClick={() => addProductToBasket(product)}
      >
        Buy
      </button>
    </li>
  );
};

export default ShopCard;
