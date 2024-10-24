import './App.css'
import Forms from './components/forms/Forms'

function App() {

  return (
    <>
      <h1>Forms</h1>
      <Forms user={{name: 'João', email: 'joao@email.com'}}/>
    </>
  )
}

export default App
