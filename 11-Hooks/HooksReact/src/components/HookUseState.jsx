import React from 'react'
import { useState } from 'react'

const HookUseState = () => {
    // 1 - useState
    let userName = 'Victor'
    const [name, setName] = useState("Lapa");

    const changeName = () => {

        userName = "Lucas" //Não muda a variável na tela, pois ja esta renderizada
        setName("Vasconcelos"); //Muda a variável na tela, pois o useState atualiza a renderização

        console.log(userName)
        console.log(name)
    }

  return (
    <div>
        {/* 1 - useState */}
        <h2>useState</h2>
          <p>Variável: {userName}</p>
          <p>useState: {name}</p>
          <button onClick={changeName}>Mudar Nome</button>
        <hr />

    </div>

  )
}

export default HookUseState