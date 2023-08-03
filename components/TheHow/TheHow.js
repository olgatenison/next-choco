"use client";

import Link from "next/link";
import Image from "next/image";
import "./how.css";

import { useRouter } from "next/navigation";

const TheHow = () => {
  const router = useRouter();

  return (
    <>
      <section id="how" class="how">
        <div class="how__container container">
          <div class="how__left">
            <Image
              className="how__pic" // Заменили class на className
              src="/TheHow/how_bg.png" // Убедитесь, что путь к изображению указан правильно
              alt="making Chocolate"
              layout="responsive"
              width={1500}
              height={1448}
            />
          </div>

          <div class="how__right">
            <h2 class="how__title title">
              how it’s <span>made?</span>
            </h2>

            <ul class="how__list">
              <li class="how__item">
                Heat the milk in a saucepan without bringing it to a boil. Add
                sugar and cocoa powder.
              </li>
              <li class="how__item">
                At the same time, prepare a water bath. Melt the butter on it.
              </li>
              <li class="how__item">
                &#34Mix&#34the milk mixture and already liquid butter. Mix
                thoroughly with a silicone spatula so that the mass becomes
                uniform and silky.
              </li>
              <li class="how__item">
                Heat the mixture over low heat, letting it barely boil.
              </li>
              <li class="how__item">
                Pour the chocolate into special containers (can be replaced with
                ice molds). Allow to cool and harden.
              </li>
            </ul>

            <button
              onClick={() => router.push("/shop")}
              type="button"
              class="how__btn btn"
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
