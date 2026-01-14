import React, { useEffect, useRef, useState } from "react";

const HookUseRef = () => {

  // ===============================
  // 1 - useRef para contar renders
  // ===============================

  // useRef cria uma referência que:
  // - NÃO causa re-render quando o valor muda
  // - Mantém o valor entre renderizações
  // Aqui usamos para contar quantas vezes o componente renderizou
  const numberRef = useRef(0);

  // Estados criados com useState
  // Sempre que mudam, o componente renderiza novamente
  const [count, setCount] = useState(0);
  const [counter, setCounter] = useState(0);

  // useEffect sem array de dependências
  // Executa TODA vez que o componente renderiza
  useEffect(() => {
    // Incrementa o valor armazenado no useRef
    // Isso NÃO dispara uma nova renderização
    numberRef.current = numberRef.current + 1;

    // Se usássemos setState aqui, causaria um loop infinito,
    // pois setState → render → useEffect → setState...
    // setCount(count + 1);
  });

  // ===============================
  // 2 - useRef para acessar o DOM
  // ===============================

  // Referência para o input
  const inputRef = useRef();

  // Estado controlado do input
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Limpa o input
    setText("");

    // Acessa diretamente o elemento do DOM
    // e coloca o foco novamente no input
    inputRef.current.focus();
  };

  return (
    <div>
      <h2>useRef</h2>

      {/* 1 - Exemplo de useRef sem causar re-render */}
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

      {/* 2 - Exemplo de useRef acessando o DOM */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          ref={inputRef}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input type="submit" value="Enviar" />
      </form>

      <hr />
    </div>
  );
};

export default HookUseRef;
