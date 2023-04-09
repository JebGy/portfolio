import React from "react";
import "./components.css";
export default function Menu({ setCurrentPage, setIsMenuOpen }) {
  return (
    <div className="menu_container">
      <ul className="list">
        <li className="item">
          <a
            onClick={() => {
              setCurrentPage("Home");
            }}
            className="fa-solid fa-house"
          ></a>
        </li>
        <li className="item">
          <a
            onClick={() => {
              setCurrentPage("About");
            }}
            className="fa-solid fa-user"
          ></a>
        </li>
        <li className="item">
          <a
            href="https://www.linkedin.com/in/favio-gabriel-munayco-rivera-574697241"
            target="_blank"
            className="fa-brands fa-linkedin"
          ></a>
        </li>
        <li className="item">
          <a
            href="
            https://github.com/JebGy
            "
            target="_blank"
            className="fa-brands fa-github"
          ></a>
        </li>
      </ul>
    </div>
  );
}
