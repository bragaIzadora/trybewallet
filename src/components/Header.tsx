import React from 'react';
import { useSelector } from 'react-redux';
import { GlobalState, WalletType } from '../types';

function Header() {
  const userEmail = useSelector((state: any) => state.user.email);
  const { expenses } = useSelector((state: GlobalState) => state.wallet as WalletType);

  const totalEx = expenses.reduce((acc, curr) => {
    const { value, currency, exchangeRates } = curr;
    const rate = exchangeRates[currency].ask;
    return acc + (parseFloat(value) * parseFloat(rate));
  }, 0);

  return (
    <div>
      <div data-testid="email-field">
        Email:
        {userEmail}
      </div>
      <div data-testid="total-field">{ totalEx.toFixed(2) }</div>
      <div data-testid="header-currency-field">BRL</div>
    </div>
  );
}

export default Header;
