import { createContext, useState } from "react";

export const ValoresContext = createContext({});

export const ValoresProvider = ({ children }) => {
  const [valores, setValores] = useState({ 1: 0.0, 15: 0.0, 30: 0.0, 90: 0.0 });
  const atualizar = (valor) => {
    setValores(valor);
  };
  return (
    <ValoresContext.Provider value={{ valores, atualizar }}>
      {children}
    </ValoresContext.Provider>
  );
};
