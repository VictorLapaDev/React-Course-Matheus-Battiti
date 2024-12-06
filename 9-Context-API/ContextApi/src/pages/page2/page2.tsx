import { useContext } from "react"
import { CounterContext } from "../../components/context/CounterContext"

const Page2 = () => {
  const {counter} = useContext(CounterContext)
  return (
    <div>
      <h2>Page2</h2>
      <p>Valor do contador {counter}</p>
    </div>
  )
}

export default Page2
