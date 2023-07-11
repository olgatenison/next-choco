import Link from "next/link";

const TheHeader = () => {
  return (
    <header class="header">
      <div class="header__container container">
        <Link
          href="/"
          class="header__logo logo"
          target="_blank"
          rel="noopener noreferrer"
        >
          Loretta’s Choco
        </Link>
        <nav class="header__navigation navigation">
          <ul class="navigation__list">
            <li class="navigation__item">
              <Link href="/" class="navigation__link">
                Home
              </Link>
            </li>
            <li class="navigation__item">
              <Link href="/how" class="navigation__link">
                How it’s made?
              </Link>
            </li>
            <li class="navigation__item">
              <Link href="/reviews" class="navigation__link">
                Chocolate is loved
              </Link>
            </li>
          </ul>
          <button type="button" class="navigation__btn btn">
            Order here
          </button>
        </nav>
      </div>
    </header>
  );
};
export { TheHeader };
