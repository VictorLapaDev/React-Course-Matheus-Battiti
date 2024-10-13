import { useState } from "react";

{/*rafce atalho para criar estrutura */}

const ManageData = () => {
    const [count, setCount] = useState(0);

    return (
      <div>
        <div>
  
          <h1>Count = {count} </h1>
  
          <div>
            <button  onClick={() => { setCount(count + 1) }}>Adicionar</button>
            <button  onClick={() => { setCount(count - 1) }}>Subtrair</button>
          </div>
  
        </div>
      </div>
  )
}

export default ManageData