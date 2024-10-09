import './App.css'
import vovo from "./assets/vovoMax.jfif" 

function App() {

  return (
    <>
     <h1>Avançando em React</h1>
     {/* imagem em public */}
     <div>
        <img src='/ben10.jfif' alt='ben 10'/>
     </div>

     {/* imagem em assets */}
    <div>
      <img src={vovo} alt="" />
    </div>
    </>
  )
}

export default App
