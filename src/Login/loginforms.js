import React from 'react';
import { Button, Form } from 'react-bootstrap';
import '../App.css';
import './Login_Cadastro.css';
import {Link } from 'react-router-dom';

const LoginForm = () => {
  const handleCadastro = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar lógica para registrar o usuário
  };

  return (
    <div className="cadastro-form">
      <h2 className="mb-4">Entre com sua conta</h2>
      
      <Form onSubmit={handleCadastro}>
        <Form.Group controlId="formBasicEmail" className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Seu email" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword" className="mb-3">
          <Form.Label>Senha</Form.Label>
          <Form.Control type="password" placeholder="Senha" />
        </Form.Group>

        <Button variant="primary" type="submit" block className="custom-button">          Entrar
        </Button>
      </Form>
      <p>Não tem uma conta?</p> <Link to="/cadastro" className='a2'>Cadastre-se</Link>
    </div>
    
  );
};

export default LoginForm;
