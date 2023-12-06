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

// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { loginn } from '../redux/actions';

// // Adicionei um contexto para gerenciar o estado global do e-mail
// const EmailContext = React.createContext();

// function Login() {
//   const dispatch = useDispatch();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const validEmail = (email) => {
//     // Adicione a lógica de validação de e-mail aqui
//     return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
//   };

//   const validPassword = (password) => {
//     return password.length >= 6;
//   };

//   const handleLogin = () => {
//     // Verifica se tanto o e-mail quanto a senha são válidos
//     if (validEmail(email) && validPassword(password)) {
//       // Dispatch da ação de login para atualizar o estado global Redux
//       dispatch(login(email));
//     }
//   };

//   return (
//     <div>
//       {/* Use o contexto para fornecer o estado global do e-mail */}
//       <EmailContext.Provider value={email}>
//         Login
//         <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
//           <label htmlFor="email">E-mail: </label>
//           <input
//             type="email"
//             name="email"
//             id="email"
//             data-testid="email-input"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <label htmlFor="senha">Senha: </label>
//           <input
//             type="password"
//             name="senha"
//             id="senha"
//             data-testid="password-input"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <button
//             type="submit"
//             disabled={!validEmail(email) || !validPassword(password)}
//           >
//             Entrar
//           </button>
//         </form>
//       </EmailContext.Provider>
//     </div>
//   );
// }

// // Exporta o contexto para que possa ser consumido por outros componentes
// export { EmailContext, Login };