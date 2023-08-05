import Image from "next/image";
import "./benefits.css";

const TheBenefits = () => {
  return (
    <section className="benefits">
      <div className="benefits__container container">
        <h2 hidden className="benefits__title">
          Benefits of Loretta’s Choco
        </h2>
        <ul className="benefits__list">
          <li className="benefits__item">
            <div className="benefits__pic">
              <Image
                className="benefits__img"
                src="/TheBenefits/01.png"
                alt="Unsurpassed taste"
                width={100}
                height={100}
              />
            </div>
            <div>
              <h3 className="benefits__subtitle">Unsurpassed taste</h3>
              <p className="benefits__txt">
                Crafted with the finest quality cocoa beans and a dedication to
                perfection, each bite is a decadent experience that simply
                cannot be matched. Savor the richness and complexity of our
                Unsurpassed Taste and discover a new level of chocolate bliss.
              </p>
            </div>
          </li>
          <li className="benefits__item">
            <div className="benefits__pic">
              <Image
                className="benefits__img"
                src="/TheBenefits/02.png"
                alt="Unsurpassed taste"
                width={100}
                height={100}
              />
            </div>
            <div>
              <h3 className="benefits__subtitle">Affordable price</h3>
              <p className="benefits__txt">
                Indulge in high-quality chocolate without breaking the bank with
                Simply Chocolate’s s election of affordable treats. Enjoy
                mouth-watering truffles and velvety chocolate bars without
                sacrificing taste or quality. Browse our selection and indulge
                in affordable luxury today.
              </p>
            </div>
          </li>
          <li className="benefits__item">
            <div className="benefits__pic">
              <Image
                className="benefits__img"
                src="/TheBenefits/03.png"
                alt="Unsurpassed taste"
                width={100}
                height={100}
              />
            </div>
            <div>
              <h3 className="benefits__subtitle">Own production</h3>
              <p className="benefits__txt">
                We take pride in our own production process, ensuring that every
                step is carefully crafted to perfection. From selecting the
                finest ingredients to handcrafting each piece, our attention to
                detail is evident in every bite.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
export { TheBenefits };
