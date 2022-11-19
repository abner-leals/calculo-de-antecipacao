import { createContext, useState } from "react";

export const ValoresContext = createContext({});

export const ValoresProvider = ({ children }) => {
  const [valores, setValores] = useState({ 1: 0.0, 15: 0.0, 30: 0.0, 90: 0.0 });
  const [days, setDays] = useState([1, 15, 30, 90]);

  const atualizar = (valor) => {
    setValores(valor);
  };

  const adicionar = (chave) => {
    if (typeof chave === "object") {
      return;
    }
    if (days.length < 10) {
      if (days.includes(parseInt(chave)) === false) {
        setDays([...days, parseInt(chave)]);
      }
    }
  };
  const remover = (objt) => {
    setDays(days.filter((p) => p !== parseInt(objt)));
  };

  return (
    <ValoresContext.Provider
      value={{ days, valores, atualizar, adicionar, remover }}
    >
      {children}
    </ValoresContext.Provider>
  );
};
