import { useState } from "react";

function Challenge(){

    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);
    const [soma, setSoma] = useState(0);

    return(
        <div>
            
            <input type="number" placeholder="insira um valor" onChange={(e) => setNumber1(Number(e.target.value))}/>
            <input type="number" placeholder="insira outro valor" onChange={(e) => setNumber2(Number(e.target.value))}/>

            <button onClick={() => setSoma(number1 + number2)}>Soma os numeros</button>

            <h3>Resultado da soma: {soma}</h3>

        </div>
    )
}

export default Challenge;