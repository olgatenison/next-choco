import Image from "next/image";
import "./testing.css";

const TheTesting = () => {
  return (
    <section class="testing">
      <div class="testing__container container">
        <Image
          src="../images/testing/testing_white.jpg"
          alt="chocolate"
          class="testing__img"
        />

        <div class="testing__wrapper">
          <h2 class="testing__title title">So more about tasting...</h2>
          <p class="testing__txt">
            But let's start at the very beginning. Not only how we taste
            chocolate is important, but also in which order. Perhaps you have
            already had the pleasure of a wine tasting at some point in your
            life. As with wine, we start our chocolate tastings with the
            lightest white chocolate product, followed by milk chocolate. We
            only taste the dark chocolate varieties at the end, as their
            intensity would drown out the finer notes of the light varieties and
            you would no longer be able to taste the multi-layered aromas.
          </p>
          <p class="testing__txt">
            When it comes to the actual tasting, we always use our five senses.
            We start with our eyes. Look at the chocolate bar, the praline or
            the SchoggiPlättli. Is the surface nice and smooth and does it have
            a nice sheen? Then your sense of touch comes into play. Chocolate
            should feel firm and smooth in your hands. As soon as it has landed
            in your mouth, it can melt with pleasure. And don't forget your
            sense of hearing. Especially if you have a chocolate bar in front of
            you, it should make a nice cracking sound when you break it next to
            your ear. This indicates that the chocolate has been well stored and
            carefully processed. As a fourth sense, our nose is of course also
            very important. Do you smell the products first, what notes and
            tastes can you make out? In many cases, flavors even seem more
            intense or different to us when we perceive them only with our nose.
            Finally, we dedicate ourselves extensively to our sense of taste.
            Let the products slowly melt in your mouth and use your tongue to
            absorb all the different tastes that the product offers you. This
            doesn't just mean ingredients like fruits or nuts, but also the
            different flavors you can taste from the chocolate itself. From
            fruity sweet to smoky and tart, the spectrum of cocoa bouquets and
            intensities is huge.
          </p>
        </div>
      </div>
    </section>
  );
};
export { TheTesting };
