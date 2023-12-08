export type GlobalState = {
  idToEdit: number,
  wallet: WalletType,
};

export type Expenses = {
  id: number,
  value: string,
  description: string,
  currency: string,
  method: string,
  tag: string,
  exchangeRates: { [key: string]: { ask: string } },
};

export type WalletType = {
  currencies: [],
  expenses: Expenses[],
  editor: boolean,
  idToEdit: number,
};
