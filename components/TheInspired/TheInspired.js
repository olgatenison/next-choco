"use client";

import Image from "next/image";
import "./inspired.css";
import { useRouter } from "next/navigation";

const TheInspired = () => {
  const router = useRouter();

  return (
    <section class="inspired">
      <div class="inspired__container container">
        <div class="inspired__wrapper">
          <h2 class="inspired__title title">
            Be inspired by a selection of Handmade, bespoke creations from
            Loretta’s Choco
          </h2>
          <p class="inspired__txt">
            Get inspired by our handmade chocolate and gift care and love to
            your loved ones. Each chocolate bar is a unique creation, made with
            the finest ingredients. Give them the tenderness and joy that can be
            found in every bite of our chocolate.
          </p>
        </div>

        <button
          onClick={() => router.push("/shop")}
          type="button"
          class="inspired__btn btn"
        >
          Buy now
        </button>
      </div>
    </section>
  );
};

export { TheInspired };
