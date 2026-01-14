import { useState } from "react";
import { usePrevious } from "../hooks/usePrevious";

const HookCustom = () => {

  // Estado atual
  const [number, setNumber] = useState(0);

  // Custom Hook que guarda o valor anterior de "number"
  // Toda vez que "number" muda, o hook retorna o valor anterior
  const previousNumber = usePrevious(number);

  return (
    <div>
      <h2>Custom Hook</h2>

      {/* Valor atual do estado */}
      <p>Atual: {number}</p>

      {/* Valor anterior capturado pelo custom hook */}
      <p>Anterior: {previousNumber}</p>

      {/* 
        Math.random() precisa ser EXECUTADO
        Se passar apenas Math.random, você estará passando a função,
        e não o valor gerado por ela
      */}
      <button onClick={() => setNumber(Math.random())}>
        Alterar
      </button>

      <hr />
    </div>
  );
};

export default HookCustom;
