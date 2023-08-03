import Image from "next/image";

import "./enjoy.css";

const TheEnjoy = () => {
  return (
    <section class="enjoy">
      <div class="enjoy__container container">
        <div class="enjoy__wrapper">
          <h2 class="enjoy__title title">Enjoy.</h2>
          <p class="enjoy__txt">
            Surprise your customers and employees with a delicious chocolate
            tasting or making in a personal and unique setting in the heart of
            Lucerne or at your desired location. We will be happy to make your
            experience unforgettable with selected drinks, individual giveaways
            or a delicious aperitif.
          </p>
          <Image
            className="enjoy__img"
            src="/TheEnjoy/bg_white.jpg"
            alt="chocolate"
            width={1000}
            height={500} // Это также можно указать как опциональное свойство, чтобы оптимизировать загрузку
            layout="responsive" // Это опциональное свойство указывает, как изображение должно вести себя при загрузке
            priority // Это также опциональное свойство, чтобы отметить изображение как приоритетное для предварительной загрузки (lazy loading)
          />
        </div>
      </div>
    </section>
  );
};
export { TheEnjoy };
