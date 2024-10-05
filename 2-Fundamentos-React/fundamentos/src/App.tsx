
import './App.css'
import Challenge from './components/Challenge'
import FirstComponent from './components/FirstComponent'

function App() {

  return (
    <>
    <div className='pai'>
      <h1>Componentes</h1>
      <FirstComponent texto='Primeiro componente'/>
      <Challenge/>
    </div>
    </>
  )
}

export default App
