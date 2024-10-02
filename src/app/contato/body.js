"use client"; // Adiciona essa linha para marcar o componente como Client Component

import Image from 'next/image';
import { useState } from 'react';

export default function Body() {
  // Estado para simular o envio do formulário
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Este site é apenas um protótipo. A funcionalidade de envio de formulário ainda não está implementada.');
    setFormSubmitted(true);
  };

  return (
    <footer className="body">
      <header className="header">
        <div className="header-content" style={{ width: '100%', height: '500px' }}>
          <Image
            src="/img/contato.gif" // Caminho para a imagem
            alt="Contato"
            layout="fill" // Faz com que a imagem preencha o contêiner
            objectFit="cover" // Ajusta a imagem para cobrir o contêiner
          />
        </div>
      </header>

      <main className="main-content">
        <div className="form-container">
          <form id="contact-form" onSubmit={handleSubmit}>
            <h2>Mande uma mensagem</h2>
            <label htmlFor="name">Nome:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="message">Mensagem:</label>
            <textarea id="message" name="message" rows="4" required></textarea>

            <button type="submit">Enviar</button>
          </form>
        </div>
      </main>
    </footer>
  );
}
