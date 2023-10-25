import React, { useState, createContext, useContext } from "react";

export const CounterContext = createContext();

export function useCounter() {
  return useContext(CounterContext);
}
export function CounterProvider({ children }) {
  const [counter, setCounter] = useState(0);

  function inc() {
    setCounter(counter + 1);
  }
  function dec() {
    setCounter(counter - 1);
  }

  return (
    <CounterContext.Provider value={{ counter, inc, dec, setCounter }}>
      {children}
    </CounterContext.Provider>
  );
}
