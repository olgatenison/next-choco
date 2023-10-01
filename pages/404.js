import Link from "next/link";
import "../app/globals.css";

export default function Custom404() {
  return (
    <>
      <Link
        href="/"
        className="header__logo logo"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="error">
          <h1 className="error__title">404 Page Not Found</h1>
          <p className="error__subtitle">Please go back to maine</p>
        </div>
      </Link>

      <style jsx>{`
        .error {
          display: block;
          position: absolute;
          top: 40%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .error__title {
          color: #a0761a;
          text-align: center;
          font-family: "Marcellus SC", serif;
          font-weight: 400;
          font-size: 24px;
          line-height: 1.3;
          letter-spacing: 2px;

          padding: 8px 20px;
          background-color: var(--bg-grey-color);
          border: var(--txt-gold) solid 1px;

          transition: all 0.3s ease 0s;
        }

        .error__title:hover,
        .error__title:focus,
        .error__title:active {
          background-color: #292929;
          color: #fff;
        }

        .error__subtitle {
          color: #ffffff;
          opacity: 0.8;
          margin-top: 20px;
          text-align: center;
        }
      `}</style>
    </>
  );
}
