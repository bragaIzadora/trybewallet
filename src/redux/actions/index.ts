// Coloque aqui suas actions
import { Expenses } from '../../types';

const SET_CURRENCIES = 'SET_CURRENCIES';
const SET_EXPENSES = 'SET_EXPENSES';
const SET_DESCRIPTION = 'SET_DESCRIPTION';
const SET_METHOD = 'SET_METHOD';
const SET_TAG = 'SET_TAG';

export const setEmail = (email: string) => ({
  type: 'SET_EMAIL',
  payload: email,
});

export const setExpenses = (expenses: Expenses) => ({
  type: SET_EXPENSES,
  expenses,
});

export const setMethod = (method: string) => ({
  type: SET_METHOD,
  method,
});

export const setDescription = (description: string) => ({
  type: SET_DESCRIPTION,
  description,
});

export const setCurrencies = (currencies: string[]) => ({
  type: SET_CURRENCIES,
  currencies,
});

export const setTag = (tag: string) => ({
  type: SET_TAG,
  tag,
});

export const Delete = (expenses:Expenses[]) => ({
  type: 'DELETE_EXPENSES',
  payload: expenses,
});
