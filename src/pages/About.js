import React from "react";
import seniors from "../assets/seniors.jpg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${seniors})` }}
      ></div>
      <div className="aboutBottom">
        <h1> About CareDEX</h1>
        <div className="aboutcaredex">
        <p>
        CareDEX, empowers organizations to readily assimilate, ingest, store and exchange information, both apriori and in real-time, with response agencies to protect and care for the elderly in extreme events. Using CareDEX, SHFs are able to share information about an individual’s changing health conditions, their personalized needs and identify those in need of specialized triage and critical care. Given the sensitive nature of personal information, e.g., health profiles, ability status, CareDEX incorporates techniques to balance the need for individual privacy with the authorized release of information to responders when needed.
        </p>
        </div>
      </div>
    </div>
  );
}

export default About;
