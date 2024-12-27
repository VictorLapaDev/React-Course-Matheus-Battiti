// 3- alterando contexto
import { useContext } from "react";

import { CounterContext } from "./CounterContext";


const ChangeCouter = () => {
    const {counter, setCounter} =   useContext(CounterContext)

  return (
    <div>
        <button onClick={() => setCounter(counter + 1)}>Add value to counter</button>
    </div>
  )
}

export default ChangeCouter