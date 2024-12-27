import { useContext } from "react"
import { CounterContext } from "../../components/context/CounterContext"

const Page3 = () => {
  const { counter } = useContext(CounterContext)
  return (
    <div>
      <h2>Page3 </h2>
      <p>{counter}</p>
    </div>
  )
}

export default Page3
