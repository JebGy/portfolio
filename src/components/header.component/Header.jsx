import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <a href="#">MyWebsite</a>
        </div>
        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__item">
              <a className="nav__link" href="#about">About</a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#pricing">Pricing</a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#technologies">Technologies</a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#projects">Projects</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
