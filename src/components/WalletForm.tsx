import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { GlobalState, WalletType } from '../types';
import { setCurrencies, setExpenses } from '../redux/actions';

const resultAPI = () => {
  return (
    fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
  );
};

function WalletForm() {
  const dispatch = useDispatch();
  const { currencies } = useSelector((state: GlobalState) => state.wallet as WalletType);
  const [form, setForm] = useState({
    value: '',
    description: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação',
  });
  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((data) => {
        const currencyList = Object.keys(data);
        const finalCurrencies = currencyList.filter((currency) => currency !== 'USDT');
        dispatch(setCurrencies(finalCurrencies));
      });
  }, [dispatch]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>
  | React.ChangeEvent<HTMLSelectElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    const expense = {
      ...form,
      id: index,
      exchangeRates: await resultAPI(),
    };
    dispatch(setExpenses(expense));
    setIndex(index + 1);
    setForm({
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    });
  };
  return (
    <>
      <label htmlFor="expenses">
        Despesas:
        <input
          name="value"
          value={ form.value }
          data-testid="value-input"
          type="text"
          onChange={ handleChange }
        />
      </label>
      <label htmlFor="description">
        Descrição:
        <input
          name="description"
          value={ form.description }
          data-testid="description-input"
          type="text"
          onChange={ handleChange }
        />
      </label>
      <label htmlFor="currency">
        Moeda:
        <select
          data-testid="currency-input"
          name="currency"
          value={ form.currency }
          onChange={ handleChange }
        >
          {currencies.map((currency) => (
            <option key={ currency } value={ currency }>
              {currency}
            </option>
          ))}
        </select>
      </label>
      <label htmlFor="method">
        Método de pagamento:
        <select
          name="method"
          value={ form.method }
          data-testid="method-input"
          onChange={ handleChange }
        >
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>

        </select>
      </label>
      <label htmlFor="tag">
        Tag:
        <select
          name="tag"
          value={ form.tag }
          data-testid="tag-input"
          onChange={ handleChange }
        >
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Health">Saúde</option>
        </select>
      </label>
      <label htmlFor="addExpense">
        <button
          type="submit"
          data-testid="btn-add"
          onClick={ handleSubmit }
        >
          Adicionar despesa
        </button>
      </label>
    </>
  );
}

export default WalletForm;
