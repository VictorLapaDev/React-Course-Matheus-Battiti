// 3- alterando contexto
// import { useContext } from "react";
// import { CounterContext } from "./CounterContext";

//4- refatorando com hook
import { useCounterContext } from "../hooks/useCounterContext"


const ChangeCouter = () => {
    // const { counter, setCounter } = useContext(CounterText);
    const {counter, setCounter} =   useCounterContext();

  return (
    <div>
        <button onClick={() => setCounter(counter + 1)}>Add value to counter</button>
    </div>
  )
}

export default ChangeCouter