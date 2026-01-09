import { useReducer } from 'react'

const HookUseReducer = () => {

    // 1 - começando com useReducer
    // useReducer é um Hook usado quando o estado tem várias regras ou ações.
    // Ele ajuda a organizar melhor o código.
    // Já o useState é mais simples e usado para estados básicos.

    //esse dispatch é como se fose o setNumber que executa a função dentro do reducer
    //o state é o valor de number dentro do reducer
    const [number, dispatch] = useReducer((state, action) => {
        return Math.random(state)
    })

  return (
    <div>
        <h2>useReducer</h2>
        <p>Número: {number}</p>
        <button onClick={dispatch}>Mudar Número</button>
        <hr />
    </div>
  )
}

export default HookUseReducer