import { useState } from 'react'
import './App.css'
import Conta from './components/Conta'
import MyComponent from './components/MyComponent'

function App() {


  const [count , setCount] = useState(0);

  return (
    <>
    {/* CSS global */}
      <h1>React com css</h1>
      <p>Css global</p>
    {/* CSS em componente */}
    <MyComponent/>

    {/* inline CSS */}
    <p style={{color: "blue",padding: "10px", borderTop: "2px solid red", backgroundColor: "yellow"}}>
      Este elemento foi estilizado de forma inline
    </p>

    {/* css inline dinâmico */}
    <h2 style={count<= 10?({color: "blue"}): ({color: "green"})}>Css inline feito de forma dinamica(maior que 10 é verde, menor é azul)</h2>
    <Conta count={count} myFunction={setCount}/>
    </>
  )
}

export default App
