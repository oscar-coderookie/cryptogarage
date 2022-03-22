import React from "react";
import "./Header.scss";
import logoCripto from "./../../assets/img/logo-criptogaraje.png";
import { Cross as Hamburger } from 'hamburger-react'

const Header = () => {
  return (
    <div className="header">
      <img className="header__img" src={logoCripto} alt="logo" />
      <Hamburger/>
    </div>
  );
};

export default Header;
