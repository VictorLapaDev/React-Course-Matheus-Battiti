import React, { forwardRef, useImperativeHandle, useRef } from 'react'

// forwardRef permite que o componente funcional
// receba uma ref vinda do componente pai
const SomeComponent = forwardRef((props, ref) => {

  // Ref local para acessar diretamente o input do DOM
  const localInputRef = useRef()

  // useImperativeHandle controla o que o componente pai
  // poderá acessar através da ref
  useImperativeHandle(ref, () => {
    return {
      // Função exposta ao componente pai
      // Ela poderá ser chamada via:
      // inputRef.current.validate()
      validate: () => {
        // Acessa o valor atual do input
        // Se tiver mais de 3 caracteres, limpa o campo
        if (localInputRef.current.value.length > 3) {
          localInputRef.current.value = "";
        }
      }
    }
  })

  return (
    <div>
      <p>Insira no máximo 3 caracteres</p>

      {/* 
        Input controlado via ref
        Permite manipulação direta do DOM
      */}
      <input type="text" ref={localInputRef} />
    </div>
  )
})

export default SomeComponent
