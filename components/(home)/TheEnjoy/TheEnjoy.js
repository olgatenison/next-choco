import Image from "next/image";
import "./enjoy.css";

const TheEnjoy = () => {
  return (
    <section className="enjoy">
      <div className="enjoy__container container">
        <div className="enjoy__wrapper">
          <h2 className="enjoy__title title">Enjoy.</h2>
          <p className="enjoy__txt">
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
            height={500}
          />
        </div>
      </div>
    </section>
  );
};

export { TheEnjoy };
