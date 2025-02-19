import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";

const LandingPage = () => {
  return (
    <div className="landing-container">
      <h1 className="company-name">GreenLeaf Plants</h1>
      <p className="about-company">Welcome to GreenLeaf Plants, your one-stop destination for premium houseplants. We believe that plants bring life and tranquility to your space. Explore our collection and bring nature indoors!</p>
      <button className="get-started-button">
        <Link to="/products">Get Started</Link>
      </button>
    </div>
  );
};

export default LandingPage;
