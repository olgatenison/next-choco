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
        <div>
          <h1>404 Page Not Found</h1>
          <p>Please go back to maine</p>
        </div>
      </Link>

      <style jsx>{`
      div {
          display: block;
          position: absolute;
          top: 40%;
          left: 42%;
          
        } 
         h1 {
          color: #a0761a;
                 
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
        h1:hover,
         h1:focus,
        h1:active{
          background-color:  #292929;
          color: #fff;
        }
p{
  color:#ffffff;
  opacity:0.8;
  margin-top:20px;
  text-align:center;
  
} 

        }
      `}</style>
    </>
  );
}
