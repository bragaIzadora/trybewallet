import React from 'react';
import Header from '../components/Header';

function Wallet() {
  return (
    <div>
      <Header />

      <div data-testid="total-field">Despesa total: 0</div>
      <div data-testid="header-currency-field">BRL</div>
    </div>
  );
}

export default Wallet;
