import './App.css'
import MyComponent from './components/MyComponent'

function App() {

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
    </>
  )
}

export default App
