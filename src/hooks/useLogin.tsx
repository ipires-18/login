import { useState } from "react";

export const useLogin = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginMessage, setLoginMessage] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email.includes('@')) {
      setLoginMessage('Por favor, insira um e-mail válido.');
    } else {

      try {
        const response = await fetch('http://localhost:3000/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (response.ok) {
          setLoginMessage('Login bem-sucedido!');
          localStorage.setItem('token', data.token)
          window.location.href = '/home'
        } else {
          setLoginMessage(`Falha no login: ${data.message}`);
        }
      } catch (error) {
        setLoginMessage('Ocorreu um erro.');
        console.error('Erro:', error);
      }
    }
  };

  return {
    handleSubmit,
    setEmail,
    setPassword,
    email,
    password,
    loginMessage
  }

}