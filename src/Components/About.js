import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/fotopc.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <h1 className="primary-heading">
          Sobre nós
        </h1>
        <p className="terceiro-text">
        O Food expiration aplicação Web é uma iniciativa dedicada ao combate ao desperdício de alimentos.
         Nosso objetivo é conscientizar a sociedade sobre a importância de evitar o descarte desnecessário de comida, 
         promovendo práticas de consumo responsável e sustentável. Por meio de parcerias com produtores, varejistas e instituições, 
         o FEA busca redistribuir alimentos excedentes para comunidades carentes, 
         contribuindo para a redução da fome e o uso mais eficiente dos recursos alimentares.
        </p>
        <p className="terceiro-text">
        Essa iniciativa busca criar um impacto positivo tanto ambiental quanto socialmente, 
        trabalhando para um mundo onde cada refeição importa.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default About;