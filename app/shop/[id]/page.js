import "./id.css";

import Image from "next/image";
import Link from "next/link";
var mydata = require("../../../data/products.json");

export default function Page({ params }) {
  var foundProduct = mydata.products.find(
    (product, addToBag) => product.id == params.id
  );

  return (
    <section className="product">
      <div className="product__container container">
        {/* Shop Item: {params.id}
      {foundProduct.name} */}

        <div className="product__item">
          <div className="product__item-left">
            <Image
              src={foundProduct.imgSrc}
              alt={foundProduct.name}
              className="product__img"
              width={260}
              height={260}
            />
            <div className="product__item-down">
              <div className="product__help">
                <p className="product__price">{foundProduct.price}</p>
                <p className="product__grm">{foundProduct.weight}</p>
              </div>

              {/* <button className="product__btn btn" onClick={addToBag}>
                Buy
              </button> */}
            </div>
          </div>

          <div className="product__item-right">
            <h3 className="product__name">{foundProduct.name}</h3>
            <p className="product__txt">{foundProduct.description}</p>
            <p className="product__txt">{foundProduct.more}</p>
            <Link href={"/shop/"} className="product__back">
              Go back...
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
