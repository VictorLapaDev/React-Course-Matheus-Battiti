import {useEffect, useState} from 'react'

const HookUseEffect = () => {

    // 1 - useEffect sem dependencias
    //toda vez que alguma variavel muda dentro do nosso escopo, ele executa o useEffect
    const [num, setNum] = useState(0);

    useEffect(() => {
        console.log("Estou sendo executado")
    })
    

    // 2 - useEffect com array de dependencia vazio 
    //só é executado uma vez ao renderizar a página, independente do que mude o valor agora, ele não é executado
    useEffect(() => {
        console.log("Serei executado apenas uma vez!")
    }, [])

    // 3 - useEffect com array de dependencias 
    // ele executa ao carregar a pagina e apenas se o valor dentro do array de dependencia dele for alterado    
    
    const [otherNum, setOtherNum] = useState(0);

    useEffect(() => {
        console.log("Sou executado apenas quando otherNum muda!");
    }, [otherNum]);

    

    //Detalhe, o useEffect é sempre executado ao carregar a página, independente de qual tipo você utilizar.

  return (
    <div>
        <h2>useEffect</h2>

        <p>{num}</p>
        <button onClick={() => setNum(num + 1)}>+ 1</button>

        <p>{otherNum}</p>
        <button onClick={() => setOtherNum(otherNum + 2)}>+ 2</button>
        <hr />  
    </div>
  )
}

export default HookUseEffect