// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { AnyAction } from 'redux';
import { WalletType } from '../../types';

const INITIAL_STATE: WalletType = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
};

const wallet = (state = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case 'SET_CURRENCIES':
      return { ...state, currencies: action.currencies };
    case 'SET_EXPENSES':
      return { ...state, expenses: [...state.expenses, action.expenses] };
    case 'SET_DESCRIPTION':
      return { ...state, description: action.description };
    case 'SET_METHOD':
      return { ...state, method: action.method };
    case 'SET_TAG':
      return { ...state, tag: action.tag };
    default:
      return state;
  }
};

export default wallet;
