"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import "./hero.css";

const TheHero = () => {
  const router = useRouter();

  return (
    <section className="hero">
      <div className="hero__container container">
        <h1 className="hero__title title">Loretta’s Choco</h1>
        <p className="hero__subtitle subtitle">
          Indulge yourself or your loved ones with the finest ingredients for a
          moment of pure chocolate delight!
        </p>
        <div className="hero__buttons">
          <button
            onClick={() => router.push("/shop")}
            type="button"
            className="hero__btn btn"
          >
            Buy now
          </button>

          <Link href="./how" className="hero__btn btn-white btn">
            How it’s made
          </Link>
        </div>
      </div>
    </section>
  );
};

export { TheHero };
