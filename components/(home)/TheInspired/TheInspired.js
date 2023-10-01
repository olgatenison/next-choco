"use client";

import "./inspired.css";
import { useRouter } from "next/navigation";

const TheInspired = () => {
  const router = useRouter();

  return (
    <section className="inspired">
      <div className="inspired__container container">
        <div className="inspired__wrapper">
          <h2 className="inspired__title title">
            Be inspired by a selection of Handmade, bespoke creations from
            Loretta’s Choco
          </h2>
          <p className="inspired__txt">
            Get inspired by our handmade chocolate and gift care and love to
            your loved ones. Each chocolate bar is a unique creation, made with
            the finest ingredients. Give them the tenderness and joy that can be
            found in every bite of our chocolate.
          </p>
        </div>

        <button
          onClick={() => router.push("/shop")}
          type="button"
          className="inspired__btn btn"
        >
          Buy now
        </button>
      </div>
    </section>
  );
};

export { TheInspired };
