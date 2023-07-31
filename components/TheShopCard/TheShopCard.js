import Image from "next/image";
import "./shopcard.css";

const TheShopCard = () => {
  return (
    <>
      <img src="./images/shop/item_01.jpg" alt="" class="shop__img" />
      <h3 class="shop__name">Dragée Box Hazelnut</h3>
      <p class="shop__txt">
        Roasted and caramelised Piedmontese hazelnuts coated in dark Grand Cru
        chocolate from Madagascar.
      </p>
      <div class="shop__help">
        <p class="shop__price">10 €</p>
        <p class="shop__grm">180 grm</p>
      </div>
      <button class="shop__btn btn">Buy</button>
    </>
  );
};
export { TheShopCard };
