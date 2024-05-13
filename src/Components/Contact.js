import React from "react";

const Contact = () => {
  return (
    <div className="contact-page-wrapper">
      <h1 className="primary-heading">Tem alguma Dúvida?</h1>
      <h1 className="primary-heading">Fale Conosco</h1>
      <div className="contact-form-container">
        <input type="text" placeholder="seu email aqui" />
        <button className="secondary-button">Enviar</button>
      </div>
    </div>
  );
};

export default Contact;