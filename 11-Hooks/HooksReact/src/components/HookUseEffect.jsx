import {useEffect, useState} from 'react'

const HookUseEffect = () => {

    // 1 - useEffect sem dependencias

    //toda vez que alguma variavel muda dentro do nosso escopo, ele executa o useEffect
    useEffect(() => {
        console.log("Estou sendo executado")
    })

    // 2 - useEffect com array de dependencia vazio

    //só é executado uma vez ao renderizar a página, independente do que mude o valor agora, ele não é exexecutado
    useEffect(() => {
        console.log("Serei executado apenas uma vez!")
    }, [])

    const [num, setNum] = useState(0);

    const changeSomething = () => {
        setNum(num + 1)
    }

  return (
    <div>
        <h2>useEffect</h2>

        <p>{num}</p>
        <button onClick={changeSomething}>+</button>
        <hr />  
    </div>
  )
}

export default HookUseEffect