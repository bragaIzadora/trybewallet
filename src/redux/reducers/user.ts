// Esse reducer será responsável por tratar as informações da pessoa usuária
import { AnyAction } from 'redux';

const INITIAL_STATE = {
  email: '',
};

const userReducer = (state = INITIAL_STATE, action: AnyAction) => {
  if (action.type === 'SET_EMAIL') {
    return { ...state, email: action.payload };
  }
  return state;
};

export default userReducer;
