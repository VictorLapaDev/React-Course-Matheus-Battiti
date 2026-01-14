import { useCallback, useState } from "react";
import List from "./List";

const HookUseCallback = () => {

  // Estado normal
  // Sempre que mudar, o componente renderiza novamente
  const [count, setCount] = useState(0);

  // useCallback memoriza a função
  // Essa função só será recriada se as dependências mudarem
  const getItensFromDatabase = useCallback(() => {
    return ["a", "b", "c"];
  }, []);
  // [] → a função nunca muda enquanto o componente existir

  return (
    <div>
      <h2>useCallback</h2>

      {/* Passamos a função como prop */}
      <List getItens={getItensFromDatabase} />

      <p>Counter: {count}</p>

      {/* Esse botão muda o estado, causando re-render */}
      <button onClick={() => setCount(count + 1)}>
        Alterar
      </button>

      <hr />
    </div>
  );
};

export default HookUseCallback;
