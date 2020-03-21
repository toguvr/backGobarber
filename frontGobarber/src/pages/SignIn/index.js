import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import logo from '~/assets/logo.svg';
import { routes } from '~/routes';
import { signInRequest } from '~/store/modules/auth/actions';

const Schema = Yup.object().shape({
  email: Yup.string()
    .email('Email Inválido')
    .required('Email obrigatório'),

  password: Yup.string().required('Senha obrigatória'),
});

export default function Signin() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit(data) {
    const { email, password } = data;

    dispatch(signInRequest(email, password));
  }
  return (
    <>
      <img src={logo} alt="Gobarber" />
      <Form schema={Schema} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Email" />
        <Input name="password" type="password" placeholder="Senha" />
        <button type="submit">
          {loading ? <CircularProgress size={24} /> : 'Login'}
        </button>
        <Link to={routes.signup}>Criar conta</Link>
      </Form>
    </>
  );
}
