import React from "react";
import "./components.css";

export default function Info() {
  return (
    <div className="info_container">
      <h1 className="info_title">Information</h1>
      <div className="info_content">
        <div className="info_item">
          <h2 className="info_item_title">Full Name</h2>
          <p className="info_item_content">Favio Gabriel Munayco Rivera</p>
        </div>
        <div className="info_item">
          <h2 className="info_item_title">Age</h2>
          <p className="info_item_content">19</p>
        </div>
        <div className="info_item">
          <h2 className="info_item_title">Experience</h2>
          <p className="info_item_content">6 months as Frontend Developer</p>
        </div>
        <div className="info_item">
          <h2 className="info_item_title">Location</h2>
          <p className="info_item_content">Ica, Peru</p>
        </div>

        <div className="info_item">
          <h2 className="info_item_title">Download CV</h2>
          <a
            className="info_item_content"
            href="https://www.dropbox.com/s/4s49d5yc7b5yxtv/CV.pdf?dl=1"
            target="_blank"
          >
            Click here!
          </a>
        </div>
      </div>
    </div>
  );
}
