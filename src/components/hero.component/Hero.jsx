import React from "react";
import "../../styles/index.css";
import "./hero.style.css";

export default function Hero() {
  return (
    <div className="hero__container" id="home">
      <div className="hero"></div>
      <div className="hero__content">
        <h1 className="hero__title">
          Hello, I'm <span className="hero__title--name">Favio Munayco</span>
        </h1>
      </div>
    </div>
  );
}
