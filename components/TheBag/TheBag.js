"use client";
import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import Bag from "./Bag";
import "./bag.css";

const TheBag = () => {
  return (
    <>
      <section className="bag__page">
        <div className="bag__container container">
          <h2 className="shop__title title">
            Your choice - incredible flavors!
            <br /> Let's check, is it enough?
          </h2>

          {/* <h4 className="bag__slogan title">
            Be inspired by a selection of Handmade, bespoke creations from
            Loretta’s Choco.
          </h4> */}
        </div>
      </section>
    </>
  );
};

export default TheBag;
