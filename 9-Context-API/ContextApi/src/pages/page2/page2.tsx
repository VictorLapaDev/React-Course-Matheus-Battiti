// import { useContext } from "react"
// import { CounterContext } from "../../components/context/CounterContext"
import ChangeCouter from "../../components/context/ChangeCouter"

//4- refatorando com hook
import { useCounterContext } from "../../hooks/useCounterContext"

const Page2 = () => {

  // const {counter} = useContext(CounterContext)
  const { counter } = useCounterContext();

  return (
    <div>
      <h2>Page2</h2>
      <p>Valor do contador {counter}</p>

      {/*3- alterando o valor do contexto*/}
      <p>Alterando o valor do contexto</p>
      <ChangeCouter/>
    </div>
  )
}

export default Page2
