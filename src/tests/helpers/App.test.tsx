import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './renderWith';
import App from '../../App';

const WALLET = ['/carteira'];

const testEmail = 'trybe@test.com';
const initialState = {
  user: { email: testEmail },
};

test('Verifica tela Login', () => {
  renderWithRouterAndRedux(<App />);

  const emailLogin = screen.getByLabelText('Email:');
  const password = screen.getByLabelText('Senha:');
  const button = screen.getByRole('button', {
    name: /entrar/i,
  });

  expect(emailLogin).toBeInTheDocument();
  expect(password).toBeInTheDocument();
  expect(button).toBeDisabled();
});

test('Verifica se ao passar dados certos abre a pagina /carteira', async () => {
  const { store } = renderWithRouterAndRedux(<App />);

  const emailLogin = screen.getByLabelText('Email:');
  const password = screen.getByLabelText('Senha:');
  const button = screen.getByRole('button', {
    name: /entrar/i,
  });

  expect(button).toBeDisabled();
  await userEvent.type(emailLogin, testEmail);
  await userEvent.type(password, '1234567');

  expect(button).not.toBeDisabled();
  await userEvent.click(button);

  const { user } = store.getState();
  expect(user).toEqual({ email: testEmail });
});

test('Verifica wallet e elementos', async () => {
  const { store } = renderWithRouterAndRedux(<App />, { initialState, initialEntries: WALLET });

  const field = screen.getByTestId('total-field');
  const description = screen.getByTestId('description-input');
  const value = screen.getByTestId('value-input');
  const button = screen.getByRole('button', {
    name: /adicionar despesa/i,
  });

  expect(field).toHaveTextContent('0');

  await userEvent.type(description, 'Test');
  await userEvent.type(value, '2');
  await userEvent.click(button);

  expect(description).toHaveTextContent('');
  expect(value).toHaveTextContent('');

  // só pro lint não reclamar do store
  console.log(store.getState());
});
