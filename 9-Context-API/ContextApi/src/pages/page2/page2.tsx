// import { useContext } from "react"
// import { CounterContext } from "../../components/context/CounterContext"
import ChangeCouter from "../../components/ChangeCouter"

//4- refatorando com hook
import { useCounterContext } from "../../hooks/useCounterContext"


//5- context mais complexo
import { useTitleColorContext } from "../../hooks/useTitleColorContext";

const Page2 = () => {

  // const {counter} = useContext(CounterContext)
  const { counter } = useCounterContext();
  //5- contexto mais complexo
  const { color, dispatch } = useTitleColorContext();

  //6- alterando context complexo
  const setTitleColor = (color) => {
    dispatch({type: color})
  }

  return (
    <div>
      <h2>Page2</h2>
      <p>Valor do contador {counter}</p>

      {/*3- alterando o valor do contexto*/}
      <p>Alterando o valor do contexto</p>
      <ChangeCouter/>

      {/*5- Contexto mais complicado */}
      <p style={{color: color}}>Cor do titulo</p>

      {/*6- alterando context complexo */}
      <div>
          <button onClick={() => setTitleColor('RED')}>Vermelho</button>
          <button onClick={() => setTitleColor('BLUE')}>Azul</button>
      </div>
    </div>
  )
}

export default Page2
