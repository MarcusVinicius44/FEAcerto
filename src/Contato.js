import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './Contato.css';

  function Cadastro() {
    const handleCadastro = (e) => {
        e.preventDefault();
        // Aqui você pode adicionar lógica para registrar o usuário
    };

    return (
        <div className="ctt">
            <h2 className="mb-4">Crie sua conta</h2>

            <Form onSubmit={handleCadastro}>
                <Form.Group controlId="formBasicEmail" className="mb-4">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control type="name" placeholder="Digite seu nome: " />
                </Form.Group>

                <Form.Group controlId="formBasicPassword" className="mb-4">
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control type="email" placeholder="Digite seu e-mail:" />
                </Form.Group>

                <Form.Group controlId="formBasicConfirmPassword" className="mb-4">
                    <Form.Label>Mensagem</Form.Label>
                    <Form.Control  placeholder="Digite sua mensagem" />
                </Form.Group>
                <br></br>
                <button type="submit" class="custom-button btn btn-primary" className='ctt-custom'> Enviar</button>
            </Form>


        </div>
    );
}

export default Cadastro;
