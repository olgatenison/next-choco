"use client";

import Link from "next/link";
import "./header.css";

import { useRouter } from "next/navigation";

const TheHeader = () => {
  const router = useRouter();

  return (
    <header className="header">
      <div className="header__container container">
        <Link
          href="/"
          className="header__logo logo"
          target="_blank"
          rel="noopener noreferrer"
        >
          Loretta’s Choco
        </Link>
        <nav className="header__navigation navigation">
          <ul className="navigation__list">
            <li className="navigation__item">
              <Link href="/" className="navigation__link">
                Home
              </Link>
            </li>
            <li className="navigation__item">
              <Link href="/how" className="navigation__link">
                How it’s made?
              </Link>
            </li>
            <li className="navigation__item">
              <Link href="/reviews" className="navigation__link">
                Chocolate is loved
              </Link>
            </li>
          </ul>

          <button
            onClick={() => router.push("/shop")}
            type="button"
            className="navigation__btn btn"
          >
            Order here
          </button>
        </nav>
      </div>
    </header>
  );
};

export { TheHeader };
