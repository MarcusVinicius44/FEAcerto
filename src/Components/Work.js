import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: DeliveryMeals,
      title: "Redistribuição de Alimentos",
      text: <div className="aa"><p>O FEA trabalha para redistribuir alimentos excedentes para comunidades carentes. 
      Isso contribui para a redução da fome e para o uso mais eficiente dos recursos alimentares. 
      Trabalhamos para um mundo onde cada refeição importa.</p></div>,
    },
    {
      image: ChooseMeals,
      title: "Eventos e Comunidade",
      text: <div className="aa">Se você está comprometido com um futuro mais verde, o FEA é o seu lugar. 
      Nossos eventos são uma celebração da sustentabilidade e um chamado à ação
      para todos aqueles que acreditam que podemos criar um mundo mais sustentável
      e saudável para as gerações futuras.</div>,
    },
    {
      image: PickMeals,
      title: "Parcerias e Benefícios",
      text: <div className="aa">O FEA tem parcerias com produtores e varejistas para coletar alimentos excedentes.
      Esses alimentos são redistribuídos para comunidades carentes. 
      Além disso, compras em supermercados parceiros recebem descontos especiais. 
      Junte-se a nós e faça a diferença!</div>,
    },
    
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <h1 className="primary-heading">Como Funcionamos</h1> 
      </div> 
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;