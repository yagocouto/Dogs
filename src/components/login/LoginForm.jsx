import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../forms/Input';
import Button from '../forms/Button';
import useForm from '../../Hooks/useForm';

const LoginForm = () => {
  const username = useForm('email');
  const password = useForm();

  console.log(username);

  function handleSubmit(event) {
    event.preventDefault();

    //puxar o token do usuario para efetuar o login
    fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(),
    })
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((json) => {
        console.log(json);
        return json;
      });
  }

  return (
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input label="Usuario" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" />
        <Button>Entrar</Button>
      </form>
      <Link to="/login/criar">Cadastro</Link>
    </section>
  );
};

export default LoginForm;
