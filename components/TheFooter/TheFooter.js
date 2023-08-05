import Link from "next/link";
import "./footer.css";

const TheFooter = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__first">
          <h2 className="footer__title title">
            <span>Chocolate</span> a delicious cure for a bad day
          </h2>

          <address className="footer__adress adress">
            <p className="adress__subtitle">Contact us:</p>
            <ul className="adress__list">
              <li className="adress__item">
                <Link className="adress__link" href="tel:+380684439426">
                  +380 (68) 443-94-26
                </Link>
              </li>
              <li className="adress__item">
                <Link
                  className="adress__link"
                  href="mailto:simplychoc@gmail.com"
                >
                  simplychoc@gmail.com
                </Link>
              </li>
            </ul>
          </address>
        </div>
        <div className="footer__second">
          <ul className="footer__nav nav">
            <li className="nav__item">
              <Link className="nav__link" href="/">
                Home
              </Link>
            </li>
            <li className="nav__item">
              <Link className="nav__link" href="/how">
                How it’s made?
              </Link>
            </li>
            <li className="nav__item">
              <Link className="nav__link" href="/reviews">
                Chocolate is loved
              </Link>
            </li>
            <li className="nav__item">
              <Link className="nav__link" href="/shop">
                Shop
              </Link>
            </li>
          </ul>
          <div className="footer__wrapper">
            <input
              className="footer__input"
              type="email"
              placeholder="Enter your email"
            />
            <button className="footer__btn btn" type="submit">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { TheFooter };
