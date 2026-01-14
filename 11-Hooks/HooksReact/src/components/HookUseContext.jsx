import { createContext } from "react";

export const SomeContext = createContext();

// Quando um dado precisa ser global no projeto,
// usamos o Context para evitar passar props manualmente.
// Ex: autenticação, tema dark/light, idioma etc.
export const HookUseContextProvider = ({ children }) => {
  const contextValue = "testing context";

  return (
    <SomeContext.Provider value={{ contextValue }}>
      {children}
    </SomeContext.Provider>
  );
};
