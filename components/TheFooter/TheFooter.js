import React, { useContext, useState } from "react";
import Link from "next/link";
import "./footer.css";
import { validateEmail } from "../../services/validation";
// import { git } from "../../public/git.svg";

const TheFooter = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    validateEmail(e.target.value)
      ? setEmailError("")
      : setEmailError("Please enter a valid email address");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Проверка валидности email перед отправкой
    if (validateEmail(email)) {
      // Логика для отправки данных на сервер
      // После успешной отправки можно сбросить значение email
      setEmail("");
      // Очистить сообщение об ошибке (если есть)
      setEmailError("");
    } else {
      setEmailError("Please enter a valid email address");
    }
  };

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
                  +380 (88) 444-44-44
                </Link>
              </li>
              <li className="adress__item">
                <Link
                  className="adress__link"
                  href="mailto:simplychoc@gmail.com"
                >
                  Chocolate@gmail.com
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
            <form onSubmit={handleSubmit} className="footer__form">
              <input
                className="footer__input"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
              />
              <button className="footer__btn btn" type="submit">
                Subscribe
              </button>
            </form>
            {emailError && <p className="error-message">{emailError}</p>}
          </div>
        </div>

        <div className="signature">
          <Link className="olga" href="https://github.com/olgatenison">
            Designed and developed by Olga Tenison
          </Link>
          <Link
            className="icon-git"
            href="https://github.com/olgatenison"
          ></Link>
          <Link
            className="icon-in"
            href="https://www.linkedin.com/in/olga-tenison/"
          ></Link>
        </div>
      </div>
    </footer>
  );
};

export { TheFooter };
