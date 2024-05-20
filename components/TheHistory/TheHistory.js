"use client";

import Image from "next/image";
import "./history.css";
import { useRouter } from "next/navigation";

const TheHistory = () => {
  const router = useRouter();

  return (
    <>
      <section className="history">
        <div className="history__container container">
          <h2 className="history__title title">
            Cooked to order.
            <br />
            Delivered to your door
          </h2>
          <div className="history__about01 about01">
            <div className="about01__left">
              <div className="image-wrapper">
                <Image
                  className="about01__img"
                  alt="cacao bean"
                  src="/TheHistory/cacao_branch.png"
                  width={670}
                  height={447}
                />
              </div>
            </div>
            <div className="about01__right">
              <h3 className="about01_subtitle history__subtitle">About us</h3>
              <p className="about01__text">
                In the heart of Switzerland, where the majestic Alps kiss the
                skies and pristine nature surrounds us, we, Loretta and her team
                of master chocolatiers, embarked on a journey unlike any other.
                Loretta, a passionate chocolatier with a lifelong love for
                confections, combined her artistry with the expertise of Swiss
                craftsmanship to create the exquisite world of Loretta&apos;s
                Choco.
              </p>
            </div>
          </div>
          <h2 className="history__subtitle02 history__subtitle">
            <span>
              Where Swiss Craftsmanship
              <br />
              Meets Chocolate Magic!
            </span>
          </h2>
          <div className="history__about02 about02">
            <div className="about02__left">
              <div className="about02_01">
                <h3 className="about02_subtitle history__subtitle">
                  Welcome to Loretta&apos;s Choco
                </h3>
                <p className="about02__text01">
                  Inspired by the beauty of Switzerland, we craft each chocolate
                  delicacy with precision, dedication, and an unwavering
                  commitment to quality. Our chocolates are more than just sweet
                  treats; they are a reflection of the Swiss heritage and the
                  natural wonders that surround us.
                </p>
              </div>
              <div className="image-wrapper">
                <Image
                  className="about02__img01"
                  alt="swees"
                  src="/TheHistory/swess.png"
                  width={300}
                  height={270}
                />
              </div>
            </div>
            <div className="about02__center">
              <div className="image-wrapper">
                <Image
                  className="about02__img03"
                  alt="swees"
                  src="/TheHistory/onemaffin.png"
                  width={300}
                  height={264}
                />
              </div>
              <p className="about02__text02">
                Imagine biting into a piece of chocolate that transports you to
                the Swiss Alps – the crispness of air, the sweetness of mountain
                flowers, and the richness of pure Swiss cocoa. Loretta&apos;s
                Choco is a symphony of flavors, an orchestra of taste that
                harmonizes the essence of Swiss nature with the artistry of
                chocolatiers. At Loretta&apos;s Choco, we bring you joy in every
                bite. Whether it&apos;s our velvety caramel-infused chocolates,
                the freshness of spring&apos;s first alpine blooms, the burst of
                dewy blueberries, or the intensity of black currants – each
                piece is crafted with love and a touch of Swiss magic.
              </p>
              <h3 className="about02_subtitle history__subtitle">
                IT IS A
                <span>
                  chocolate <br />
                  country
                </span>
              </h3>
            </div>
            <div className="about02__right">
              <div className="image-wrapper">
                <Image
                  className="about02__img02"
                  alt="maffins"
                  src="/TheHistory/about2.png"
                  width={350}
                  height={582}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export { TheHistory };
