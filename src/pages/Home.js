import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/techbackground.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Welcome to the CareDEX Portal</h1>
        <p> Disaster preparedness and recovery</p>
        <Link to="/drills">
          <button> Drill Info </button>
        </Link>
      </div>
      </div>
    
  );
}

export default Home;
