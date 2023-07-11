import Image from "next/image";

export default function Home() {
  return (
    <>
      <section class="hero">
        <div class="hero__container container">
          <h1 class="hero__title title">Loretta’s Choco</h1>
          <p class="hero__subtitle subtitle">
            Indulge yourself or your loved ones with the finest ingredients for
            a moment of pure chocolate delight!
          </p>
          <div class="hero__buttons">
            <div class="hero__left">
              <button type="button" class="hero__btn btn">
                Buy now
              </button>

              <a href="#how" class="hero__btn btn-white btn">
                How it’s made
              </a>
            </div>
          </div>
        </div>
      </section>

      <section class="benefits">
        <div class="benefits__container container">
          <h2 hidden class="benefits__title">
            Benefits of Loretta's Choco
          </h2>
          <ul class="benefits__list">
            <li class="benefits__item">
              <div class="benefits__pic">
                <img
                  class="benefits__img"
                  src="./images/benefits/01.png"
                  alt="Unsurpassed taste"
                  width="100"
                  height="100"
                />
              </div>
              <div>
                <h3 class="benefits__subtitle">Unsurpassed taste</h3>
                <p class="benefits__txt">
                  Crafted with the finest quality cocoa beans and a dedication
                  to perfection, each bite is a decadent experience that simply
                  cannot be matched. Savor the richness and complexity of our
                  Unsurpassed Taste and discover a new level of chocolate bliss.
                </p>
              </div>
            </li>
            <li class="benefits__item">
              <div class="benefits__pic">
                <img
                  class="benefits__img"
                  src="./images/benefits/02.png"
                  alt="Affordable price"
                  width="100"
                  height="100"
                />
              </div>
              <div>
                <h3 class="benefits__subtitle">Affordable price</h3>
                <p class="benefits__txt">
                  Indulge in high-quality chocolate without breaking the bank
                  with Simply Chocolate's s election of affordable treats. Enjoy
                  mouth-watering truffles and velvety chocolate bars without
                  sacrificing taste or quality. Browse our selection and indulge
                  in affordable luxury today.
                </p>
              </div>
            </li>
            <li class="benefits__item">
              <div class="benefits__pic">
                <img
                  class="benefits__img"
                  src="./images/benefits/03.png"
                  alt="Own production"
                  width="100"
                  height="100"
                />
              </div>
              <div>
                <h3 class="benefits__subtitle">Own production</h3>
                <p class="benefits__txt">
                  We take pride in our own production process, ensuring that
                  every step is carefully crafted to perfection. From selecting
                  the finest ingredients to handcrafting each piece, our
                  attention to detail is evident in every bite.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section class="inspired">
        <div class="inspired__container container">
          <div class="inspired__wrapper">
            <h2 class="inspired__title title">
              Be inspired by a selection of Handmade, bespoke creations from
              Loretta's Choco
            </h2>
            <p class="inspired__txt">
              Get inspired by our handmade chocolate and gift care and love to
              your loved ones. Each chocolate bar is a unique creation, made
              with the finest ingredients. Give them the tenderness and joy that
              can be found in every bite of our chocolate.
            </p>
          </div>
          <button type="button" class="inspired__btn btn">
            Buy now
          </button>
        </div>
      </section>

      <section class="enjoy">
        <div class="enjoy__container container">
          <div class="enjoy__wrapper">
            <h2 class="enjoy__title title">Enjoy.</h2>
            <p class="enjoy__txt">
              Surprise your customers and employees with a delicious chocolate
              tasting or making in a personal and unique setting in the heart of
              Lucerne or at your desired location. We will be happy to make your
              experience unforgettable with selected drinks, individual
              giveaways or a delicious aperitif.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
