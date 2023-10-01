"use client";

import Image from "next/image";
import "./how.css";
import { useRouter } from "next/navigation";

const TheHow = () => {
  const router = useRouter();

  return (
    <>
      <section id="how" className="how">
        <div className="how__container container">
          <div className="how__left">
            <Image
              className="how__pic"
              src="/TheHow/how_bg.png"
              alt="making Chocolate"
              width={1500}
              height={1448}
              sizes="(max-width: 640px) 100vw, (max-width: 750px) 70vw, 750px"
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          </div>

          <div className="how__right">
            <h2 className="how__title title">
              how it’s <span>made?</span>
            </h2>

            <ul className="how__list">
              <li className="how__item">
                Heat the milk in a saucepan without bringing it to a boil. Add
                sugar and cocoa powder.
              </li>
              <li className="how__item">
                At the same time, prepare a water bath. Melt the butter on it.
              </li>
              <li className="how__item">
                &#34Mix&#34the milk mixture and already liquid butter. Mix
                thoroughly with a silicone spatula so that the mass becomes
                uniform and silky.
              </li>
              <li className="how__item">
                Heat the mixture over low heat, letting it barely boil.
              </li>
              <li className="how__item">
                Pour the chocolate into special containers (can be replaced with
                ice molds). Allow to cool and harden.
              </li>
            </ul>

            <button
              onClick={() => router.push("/shop")}
              type="button"
              className="how__btn btn"
            >
              Buy now
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export { TheHow };
