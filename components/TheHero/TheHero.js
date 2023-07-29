"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import "./hero.css";

const TheHero = () => {
  const router = useRouter();

  return (
    <section class="hero">
      <div class="hero__container container">
        <h1 class="hero__title title">Loretta’s Choco</h1>
        <p class="hero__subtitle subtitle">
          Indulge yourself or your loved ones with the finest ingredients for a
          moment of pure chocolate delight!
        </p>
        <div class="hero__buttons">
          <button
            onClick={() => router.push("/shop")}
            type="button"
            class="hero__btn btn"
          >
            Buy now
          </button>

          <Link href="./how" class="hero__btn btn-white btn">
            How it’s made
          </Link>
        </div>
      </div>
    </section>
  );
};

export { TheHero };
