import React from "react";
import BannerBackground from "../Assets/home-banner-image.png";
import Navbar from "./Navbar";
import About from "./About";
import Work from "./Work";
import Contact from "./Contact";
import Forum from "../Forum";

const Home = () => {
  return (
    <div className="home-container">
     
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
          FEA CONTRA O DESPERDÍCIO DE ALIMENTOS.
          </h1>
          <p className="primary-text">
          Desfrute refeições de restaurantes, padarias e produtos frescos de hortifrutis.
          Una-se ao movimento contra o desperdício de alimentos.
          Faça a diferença no meio ambiente e economize.
          Escolha sustentabilidade!
          </p>
          <button className="secondary-button">
            Seja parceiro {" "}
          </button>
          <p className="primary-text">
          Junte-se a nós na missão de combater o desperdício de alimentos! 
          Seja um parceiro do nosso site e ajude a resgatar alimentos que seriam desperdiçados, 
          promovendo o bem-estar e a sustentabilidade.
          </p>
        </div>
        <div className="home-image-section">
        </div>
        
      </div>
      <About />
    <Work />
    <Contact />
    </div>
 
  );
};

export default Home;