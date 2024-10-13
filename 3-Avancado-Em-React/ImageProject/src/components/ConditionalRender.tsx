import { useState } from "react"

const ConditionalRender = () => {

    const [x, setX] = useState(true)

  return (
    <div>
        <h1>Isso irá aparecer?</h1>
        {x &&  <p>Sim, isso irá aparecer pois x é true</p>} {/*condicional simples*/}
        {!x && <p>Isso irá aparecer pois x é falso</p>}

        
        {x == true ? (
            <div>
                <p>Sim, isso irá aparecer pois x é true</p>
            </div>
            ) : (
            <div>
                <p>Isso irá aparecer pois x é falso</p>
            </div>
            )
        }
        
        <button onClick={() => setX(prevX => !prevX)}>
            Mudar o X = {x.toString()} {/* Converte x para string para exibição */}
        </button>
    </div>
  )
}

export default ConditionalRender