"use client";

import Image from "next/image";

import "./process.css";

const TheProcess = () => {
  return (
    <section class="process">
      <div class="process__container container">
        <div class="process__right">
          <ul class="process__list">
            <li class="process__item">
              <h3 class="process__title title">Chocolate making process</h3>
              <p class="process__txt">
                Try our chocolates today and discover the perfect balance of
                flavor
              </p>
              <p class="process__txt">
                Our beans, which really are a true gift of nature, originate
                from five different countries. If we had to put the character of
                the beans into one word, we would say they are all rich. In a
                different way, of course, and that makes them all special: smoky
                Brazil, spicy, earthy, woody Jamaica, fruity, nutty Madagascar,
                herbal and ripe fruit Mexico, and rich fruity-spicy combination
                of São Tomé.
              </p>
            </li>
            <li class="process__item">
              <h3 class="process__title title">Ingredients</h3>
              <p class="process__txt">
                Quality raw ingredients are the key of our success.
              </p>
              <p class="process__txt">
                Most of the cocoa beans we use are organic. Also cocoa butter,
                cane sugar, milk powder, berries, spruce sprouts, birch sap, etc
                are all organic. Wherever possible we use local ingredients.
                Often you will find us hiking in the forest searching for new
                and amazing flavors.
              </p>
            </li>
          </ul>
        </div>
        <div class="process__left">
          <img
            class="process__pic"
            src="./images/how/how_white.jpg"
            alt="making Chocolate"
          />
        </div>
      </div>
    </section>
  );
};

export { TheProcess };
