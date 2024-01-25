import React, { createContext, useState } from "react";

// context declaration
interface ICounter {
  count: number;
  increase: () => void;
}
export const CounterContext = createContext<ICounter>({
  count: 0,
  increase: () => null,
});

// context provider implementation
interface ICounterContextProviderProps {
  children: React.JSX.Element[] | React.JSX.Element | React.ReactNode;
}
export const CounterContextProvider: React.FC<ICounterContextProviderProps> = ({
  children,
}) => {
  const [counter, setCounter] = useState<number>(0);

  const increase = () => {
    setCounter(counter + 1);
  };

  return (
    <CounterContext.Provider value={{ count: counter, increase }}>
      {children}
    </CounterContext.Provider>
  );
};
