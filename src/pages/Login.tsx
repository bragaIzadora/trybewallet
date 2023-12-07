import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setEmail } from '../redux/actions';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmailState] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && password.length >= 6) {
      navigate('/carteira');

      dispatch(setEmail(email));
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <label htmlFor="email-input">Email:</label>
      <input
        type="email"
        id="email-input"
        data-testid="email-input"
        value={ email }
        onChange={ (e) => setEmailState(e.target.value) }
      />

      <label htmlFor="password-input">Senha:</label>
      <input
        type="password"
        id="password-input"
        data-testid="password-input"
        value={ password }
        onChange={ (e) => setPassword(e.target.value) }
      />

      <button onClick={ handleLogin } disabled={ !(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && password.length >= 6) }>
        Entrar
      </button>
    </div>
  );
}

export default Login;
