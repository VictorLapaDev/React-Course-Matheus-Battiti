import { useState } from 'react'
import './App.css'
import Conta from './components/Conta'
import MyComponent from './components/MyComponent'
import CssModules from './components/CssModules';

function App() {


  const [count , setCount] = useState(0);

  const purpleTitle = true;

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

    {/* Classe dnamica */}
    <h2 className={purpleTitle? 'purple-title' : 'pink-title'}>Este titulo vai ter uma classe dinamica</h2>

    {/* CSS modules */}
    <CssModules/>
    </>
  )
}

export default App
