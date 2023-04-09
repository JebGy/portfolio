import React, { useEffect } from "react";
import "./components.css";
export default function Home({ currentPage }) {

  return (
    <div className={`home_container ${currentPage}`}>
      <div className="home_description">
        <h1 className="home_title">Hi, I'm </h1>
        <span className="home_name">Favio Munayco</span>

        <h2 className="home_subtitle">Software Developer</h2>
        <p className="home_paragraph">
          I'm a software developer with a passion for building web applications
          and learning new technologies.
        </p>
      </div>
      <div className="home_image"></div>
    </div>
  );
}
