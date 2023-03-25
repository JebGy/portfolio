import React from 'react';
import '../../styles/index.css';
import './footer.style.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p>© 2023 Favio Munayco , Inc. All rights reserved.</p>
          </div>
          <div className="col-md-6">
            <ul className="list-inline social-buttons">
              <li className="list-inline-item">
                <a href="https://wa.link/hp1gqo" target={
                  "_blank"
                }>
                  <i className="fab fa-whatsapp"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.instagram.com/nittrosoftware/" target={
                  "_blank"
                }>
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.linkedin.com/in/favio-gabriel-munayco-rivera-574697241/" target={"_blank"}>
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
