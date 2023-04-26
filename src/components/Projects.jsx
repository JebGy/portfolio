import React from "react";
import "./components.css";

export default function Projects() {
  return (
    <div className="projects_container">
      <h1 className="projects_title">Projects</h1>
      <div className="projects">
        <div className="projects_content">
          <div className="project">
            <div className="project_image" id="mist"></div>
            <h2 className="project_title">Mistika's Landig Page</h2>
            <p className="project_description">
              This is a landing page for a company called Mistika. It was made
              using react and css. It is a responsive website.
            </p>
            <a
              className="project_link"
              href="https://www.mistika.lat"
              target="_blank"
            >
              See more
            </a>
          </div>

          <div className="project">
            <div className="project_image" id="port"></div>
            <h2 className="project_title">My Portafolio</h2>
            <p className="project_description">
              This is my portafolio. It was made using react and css. It is a
              responsive website.
            </p>
            <a
              className="project_link"
              href="https://www.faviodev.com"
              target="_blank"
            >
              See more
            </a>
          </div>

          <div className="project">
            <div className="project_image" id="vet"></div>
            <h2 className="project_title">Vet-App</h2>
            <p className="project_description">
              This is a web app for a veterinary clinic. It was made using
              react, css and firebase. It is a responsive website.
            </p>
            <a
              className="project_link"
              href="https://jebgy.github.io/vet-app/"
              target="_blank"
            >
              See more
            </a>
          </div>

          <div className="project">
            <div className="project_image" id="procalc"></div>
            <h2 className="project_title">ProCalc2</h2>
            <p className="project_description">
              This is a desktop app. It was made using Java and Python. Each
              component was made manually.
            </p>
            <a
              className="project_link"
              href="https://www.dropbox.com/s/m487d5heohl8i4b/ProCalc2-2.6.rar?dl=1"
              target="_blank"
            >
              Download 2.6.0
            </a>
          </div>

          <div className="project">
            <div className="project_image" id="autoCon"></div>
            <h2 className="project_title">MySQL Auto-Connect</h2>
            <p className="project_description">
              This is a library for Java. It was made using Java and a MySQL
              connector. It allows you to connect to a MySQL database without
              having to write the connection code. Open Source Project.
            </p>
            <a
              className="project_link"
              href="https://github.com/JebGy/MySQL-Auto-Connect"
              target="_blank"
            >
              See more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
