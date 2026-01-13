import React, { useRef } from 'react'
import SomeComponent from './SomeComponent';

const HookUseImperativeHandle = () => {

  // useRef cria uma referência mutável
  // Aqui ela será usada para acessar funções internas
  // do componente filho (SomeComponent)
  const inputRef = useRef();

  return (
    <div>
      <h2>useImperativeHandle</h2>

      {/* 
        Passamos a ref para o componente filho.
        Isso só funciona porque o filho usa forwardRef
      */}
      <SomeComponent ref={inputRef} />

      {/* 
        Ao clicar no botão, acessamos inputRef.current
        e chamamos a função validate(), que foi exposta
        pelo componente filho usando useImperativeHandle
      */}
      <button onClick={() => inputRef.current.validate()}>
        Validate
      </button>

      <hr />
    </div>
  )
}

export default HookUseImperativeHandle
