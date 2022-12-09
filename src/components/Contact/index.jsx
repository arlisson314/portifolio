/* eslint-disable no-console */
/* eslint-disable no-alert */
import React, { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';

import Container from './styles';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [desable, setDesable] = useState(true);

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      message,
      email,
    };

    emailjs.send('service_6en4ozv', 'template_1lrc5qb', templateParams, 'cdDxgO2tekQMZtWDD')
      .then((response) => {
        alert('Email envaido com sucesso');
        console.log(response.status, response.text);
        setName('');
        setEmail('');
        setMessage('');
      }).catch((error) => console.error('Error', error));
  };

  useEffect(() => {
    const validEmail = /^.*@.*\.com$/.test(email);
    const validName = name.length >= 2;
    const validMessage = message.length > 2;
    setDesable(!(validEmail && validName && validMessage));
  }, [email, name, message]);

  return (
    <Container id="Contact">
      <section>
        <h1>
          Contact
          <span> Me</span>
        </h1>
      </section>
      <main>
        <form onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            id="name"
            onChange={({ target }) => setName(target.value)}
            value={name}
            placeholder="Deigite seu nome"
            required
          />
          <input
            type="email"
            name="email"
            id="email"
            onChange={({ target }) => setEmail(target.value)}
            value={email}
            placeholder="Deigite seu E-mail"
            required
          />
          <textarea
            rows={4}
            cols={33}
            maxLength={500}
            onChange={({ target }) => setMessage(target.value)}
            value={message}
            placeholder="Digite sua menagem..."
            required
          />
          <button
            type="submit"
            disabled={desable}
          >
            Enviar email
          </button>
        </form>
        <nav>
          <a
            href="https://www.linkedin.com/in/arlisson-nascimento/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=#0a66c2"
              alt="LinkedIn"
            />
          </a>
          <a
            href="https://wa.me/5598991236814"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white"
              alt="logo"
            />
          </a>

          <a
            href="https://github.com/arlisson314"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white"
              alt="github"
            />
          </a>
        </nav>
      </main>
    </Container>
  );
}

export default Contact;
