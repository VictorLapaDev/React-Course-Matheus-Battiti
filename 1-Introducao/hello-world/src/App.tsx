import { useState } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(0);

  return (
    <div className='center-container'>
      <div className='box'>

        <h1>Count = {count} </h1>

        <div className="button-container">
          <button className='somar' onClick={() => { setCount(count + 1) }}>Adicionar</button>
          <button className='tirar' onClick={() => { setCount(count - 1) }}>Subtrair</button>
        </div>

      </div>
    </div>
  )
}

export default App
