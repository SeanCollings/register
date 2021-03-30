import React, { useState, createContext, useContext, useMemo } from 'react';

export const ChargeContext = createContext({
  allCharges: [],
  addCharge: () => {},
  currentChargeInput: '',
  addCurrentChargeInput: () => {},
  clearCurrentChargeInput: () => {},
  removeChargeFromList: () => {},
});

const createStore = () => {
  const Provider = ({ children }) => {
    const [allCharges, setAllCharges] = useState([]);
    const [currentChargeInput, setCurrentChargeInput] = useState('');

    const addFinalCharge = (charge) => {
      setAllCharges((curr) => [charge, ...curr]);
    };

    const addCurrentChargeInput = (value) => {
      setCurrentChargeInput((curr) => (curr += value));
    };

    const clearCurrentChargeInput = () => {
      setCurrentChargeInput('');
    };

    const removeChargeFromList = (charge) => {};

    return (
      <ChargeContext.Provider
        value={{
          allCharges,
          currentChargeInput,
          addFinalCharge,
          addCurrentChargeInput,
          clearCurrentChargeInput,
          removeChargeFromList,
        }}
      >
        {children}
      </ChargeContext.Provider>
    );
  };

  const useChargeContext = () => useContext(ChargeContext);

  return [Provider, useChargeContext];
};

export const [ChargeProvider, useChargeContext] = createStore();
