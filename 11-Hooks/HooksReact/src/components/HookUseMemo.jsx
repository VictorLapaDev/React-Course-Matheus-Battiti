import React, { useEffect, useMemo, useState } from 'react'

const HookUseMemo = () => {

  // Estado que armazena o valor digitado no input
  // Sempre que esse estado muda, o componente renderiza novamente
  const [number, setNumber] = useState(0);

  // useMemo
  // Serve para MEMORIZAR valores (arrays, objetos, cálculos)
  // Esse array só será criado UMA vez
  // Enquanto as dependências ([]) não mudarem, a referência será a mesma
  const premiumNumbers = useMemo(() => {
    return ["0", "100", "200"]
  }, []);

  // useEffect
  // Será executado APENAS se a referência de premiumNumbers mudar
  // Como ele está memorizado com useMemo, isso NÃO acontece
  useEffect(() => {
    console.log("Toda vez que premiumNumbers for alterado, serei executado")
  }, [premiumNumbers]);

  return (
    <div>
      <h2>useMemo</h2>

      {/* Input controlado pelo estado "number" */}
      {/* Cada digitação altera o estado e causa re-render */}
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />

      {/* 
        Verifica se o valor digitado existe dentro do array premiumNumbers
        includes() retorna true ou false
        O operador ternário decide qual texto renderizar
      */}
      {premiumNumbers.includes(number)
        ? <p>Você acertou o número!! 🎉</p>
        : <p>Tente de novo 🤣</p>
      }

      <hr />
    </div>
  )
}

export default HookUseMemo
