import React from "react";
import "./components.css";

export default function Tech() {
  return (
    <div className="tech_container">
      <h1 className="info_title">Technologies</h1>
      <div className="tech">
        <div className="tech_content">
          <div id="bootstrap" className="tech_image"></div>
          <div id="materialUi" className="tech_image"></div>
          <div id="spring" className="tech_image"></div>
          <div id="react" className="tech_image"></div>
          <div id="firebase" className="tech_image"></div>
        </div>
      </div>
    </div>
  );
}
