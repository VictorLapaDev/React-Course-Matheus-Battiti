import { useState } from "react"

const ConditionalRender = () => {

    const [x] = useState(true)

  return (
    <div>
        <h1>Isso irá aparecer?</h1>
        {x &&  <p>Sim, isso irá aparecer pois x é true</p>} {/*condicional simples*/}
        {!x && <p>Isso irá aparecer pois x é falso</p>}

    </div>
  )
}

export default ConditionalRender