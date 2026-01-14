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

    // 2 - useState com input
    const [age, setAge] = useState(20);

    const handleSubmit = (e) => {
        e.preventDefault();//Evita o reload da página

        //enviar para o backend
        window.alert(age);
    }

  return (
    <div>
        {/* 1 - useState */}
        <h2>useState</h2>
        <p>Variável: {userName}</p>
        <p>useState: {name}</p>
        <button onClick={changeName}>Mudar Nome</button>

        {/* 2 - useState com input */}
        <p>Digite a sua idade:</p>
        <form onSubmit={handleSubmit}>
            <input type="text" value={age} onChange= {(e) => setAge(e.target.value)}/>
            <input type="submit" value="Enviar"/>
        </form>
        <p>Idade: {age}</p>
        <hr />

    </div>

  )
}

export default HookUseState