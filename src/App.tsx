import React from 'react';
import { Provider } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { composeWithDevTools } from '@redux-devtools/extension';
import { legacy_createStore as createStore } from 'redux';
import rootReducer from './redux/reducers';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

const store = createStore(rootReducer, composeWithDevTools());

function App() {
  return (
    <Provider store={ store }>
      <div>
        Hello, TrybeWallet!
        <Routes>
          <Route path="/" element={ <Login /> } />
          <Route path="/carteira" element={ <Wallet /> } />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
