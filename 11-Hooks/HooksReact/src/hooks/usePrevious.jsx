import { useDebugValue, useEffect, useRef } from "react";

export const usePrevious = (value) => {

  // useRef cria um objeto persistente entre renderizações
  // ref.current NÃO causa re-render quando muda
  const ref = useRef();

  useDebugValue(" ---- CUSTOM HOOK & USEDEBUGVALUE ----")
  useDebugValue("O número anterior é: " + ref)

  // useEffect roda após a renderização
  // Aqui salvamos o valor atual para ser o "anterior"
  // na próxima renderização
  useEffect(() => {
    ref.current = value;
  }); // executa sempre que o value mudar

  // Retorna o valor anterior armazenado no ref
  return ref.current;
};
