/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Logo from "../Assets/fotologo2.png";
import { Link } from "react-router-dom"; // Importe o Link

const Navbar = () => {
  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt="" />
      </div>
      <div className="navbar-links-container">
        <a href="/">Home</a>
        <a href="Contato">Contato</a>
        <a href="">Pontos de coleta</a>
        <a href="/Forum">Fórum</a>
        <a href="">
        </a>
        <button className="primary-button"><a href="/Login">Login</a></button>
      </div>
    </nav>
  );
};

export default Navbar;