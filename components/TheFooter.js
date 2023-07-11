import Link from "next/link";

const TheFooter = () => {
  return (
    <footer class="footer">
      <div class="footer__container container">
        <div class="footer__first">
          <h2 class="footer__title title">
            <span>Chocolate</span> a delicious cure for a bad day
          </h2>

          <address class="footer__adress adress">
            <p class="adress__subtitle">Contact us:</p>
            <ul class="adress__list">
              <li class="adress__item">
                <Link class="adress__link" href="tel:+380684439426">
                  +380 (68) 443-94-26
                </Link>
              </li>
              <li class="adress__item">
                <Link class="adress__link" href="mailto:simplychoc@gmail.com">
                  simplychoc@gmail.com
                </Link>
              </li>
            </ul>
          </address>
        </div>
        <div class="footer__second">
          <ul class="footer__nav nav">
            <li class="nav__item">
              <Link class="nav__link" href="/">
                Home
              </Link>
            </li>
            <li class="nav__item">
              <Link class="nav__link" href="/how">
                How it’s made?
              </Link>
            </li>
            <li class="nav__item">
              <Link class="nav__link" href="/reviews">
                Chocolate is loved
              </Link>
            </li>
          </ul>
          <div class="footer__wrapper">
            <input
              class="footer__input"
              type="email"
              placeholder="Enter your email"
            />
            <button class="footer__btn btn" type="submit">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
export { TheFooter };
