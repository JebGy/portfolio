import React, { useEffect, useState } from "react";
import "./components.css";
import Info from "./Info";
import Tech from "./Tech";
import Projects from "./Projects";
export default function About({ currentPage }) {
  const [currentButton, setCurrentButton] = useState("Info");

  return (
    <div className={`about_container ${currentPage}`}>
      <div className="about_aside">
        <div className="about_image"></div>
        <ul className="buttons_container">
          <li
            className="button"
            onClick={() => {
              setCurrentButton("Info");
            }}
          >
            Info
          </li>
          <li
            className="button"
            onClick={() => {
              setCurrentButton("Technologies");
            }}
          >
            Technologies
          </li>
          <li
            className="button"
            onClick={() => {
              setCurrentButton("Projects");
            }}
          >
            Projects
          </li>
        </ul>
      </div>

      <div className="about_content">
        {
          {
            Info: <Info />,
            Technologies: <Tech />,
            Projects: <Projects />,
          }[currentButton]
        }
      </div>

      <div className="about_mobile" id="about_mobile">
        <ul className="buttons_container">
          <li
            className="button"
            onClick={() => {
              setCurrentButton("Info");
            }}
          >
            Info
          </li>
          <li
            className="button"
            onClick={() => {
              setCurrentButton("Technologies");
            }}
          >
            Technologies
          </li>
          <li
            className="button"
            onClick={() => {
              setCurrentButton("Projects");
            }}
          >
            Projects
          </li>
        </ul>
      </div>

      <button
        className="about_toggler"
        onClick={() => {
          document.getElementById("about_mobile").classList.toggle("about_active");
        }}
      >
        <i className="fa-solid fa-bars"></i>
      </button>
    </div>
  );
}
