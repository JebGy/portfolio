import React from "react";
import "./header.css";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("home")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            Favio
          </a>
        </div>
        <button
          className="nav__toggle"
          onClick={() => {
            document.getElementById("nav-menu").classList.toggle("active");
            document.getElementById("nav__cont").classList.toggle("exist");
          }}
        ></button>
      </div>
      <nav className="nav exist" id="nav__cont">
        <ul className="nav__list" id="nav-menu">
          <li className="nav__item">
            <a
              className="nav__link"
              href="/"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("about")
                  .scrollIntoView({ behavior: "smooth" });
              }}
            >
              About
            </a>
          </li>
          <li className="nav__item">
            <a
              className="nav__link"
              href="/"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("pricing")
                  .scrollIntoView({ behavior: "smooth" });
              }}
            >
              Pricing
            </a>
          </li>
          <li className="nav__item">
            <a
              className="nav__link"
              href="/"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("tech")
                  .scrollIntoView({ behavior: "smooth" });
              }}
            >
              Technologies
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
/**
 * <li className="nav__item">
              <a className="nav__link" href="/proyects">Projects</a>
            </li>
 */

export default Header;
