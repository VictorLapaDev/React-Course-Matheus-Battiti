//1 - criar contexto
import { createContext, useContext, useState } from "react";

export const CounterContext = createContext();

//2 - criar contexto
export const CounterContextProvider = ({children}) => {
    const [counter, setCounter] = useState(10)

    return(
        <CounterContext.Provider value={{counter, setCounter}}>
            {children}
        </CounterContext.Provider>
    );
};