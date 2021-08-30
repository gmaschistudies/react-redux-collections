import { AnyAction } from '@reduxjs/toolkit';

const localStorageMiddleware = ({ getState }: any) => {
  return (next: any) => (action: AnyAction) => {
    const result = next(action);
    localStorage.setItem('applicationState', JSON.stringify(getState()));
    return result;
  };
};

const reHydrateStore = () => {
  if (localStorage.getItem('applicationState') !== null) {
    return JSON.parse(localStorage.getItem('applicationState')!); // re-hydrate the store
  }
  return undefined;
};

export { localStorageMiddleware, reHydrateStore };
