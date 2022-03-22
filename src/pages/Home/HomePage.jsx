import React from "react";
import "./HomePage.scss";
import logo from "./../../assets/img/logo-blanco.png";

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="homepage_hero">
        <h1 className="homepage_hero__title">CRIPTOGARAJE</h1>
        <div className="homepage_hero__subtitle">
        <p>By:</p>
        <img src={logo} alt="logo-chris" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
