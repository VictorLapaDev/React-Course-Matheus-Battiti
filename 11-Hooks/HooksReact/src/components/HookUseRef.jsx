import React, { useEffect, useRef, useState } from "react";

const HookUseRef = () => {

  // 1 - useRef
  // useRef cria uma referência que:
  // - NÃO causa re-render quando muda
  // - Mantém o valor entre renderizações
  // Aqui usamos para contar quantas vezes o componente renderizou
  const numberRef = useRef(0);

  // Estados normais com useState
  // Sempre que mudam, o componente renderiza novamente
  const [count, setCount] = useState(0);
  const [counter, setCounter] = useState(0);

  // useEffect sem dependências
  // Executa toda vez que o componente renderiza
  useEffect(() => {
    // Incrementa o valor armazenado no useRef
    // Isso NÃO dispara um novo render
    numberRef.current = numberRef.current + 1;

    // Se usássemos useState aqui, causaria um loop infinito,
    // pois o setState dispara um novo render
    // setCount(count + 1);
  });

  return (
    <div>
      <h2>useRef</h2>

      {/* Exibe quantas vezes o componente foi renderizado */}
      <p>O componente renderizou {numberRef.current} vezes</p>

      {/* Contador usando useState */}
      <p>Counter 1: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Contador A
      </button>

      {/* Outro contador independente */}
      <p>Counter 2: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>
        Contador B
      </button>

      <hr />
    </div>
  );
};

export default HookUseRef;
