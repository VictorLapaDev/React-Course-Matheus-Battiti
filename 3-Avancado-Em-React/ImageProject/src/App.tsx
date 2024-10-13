import './App.css'
import vovo from "./assets/vovoMax.jfif" 
import ConditionalRender from './components/ConditionalRender'
import ListRender from './components/ListRender'
import ManageData from './components/ManageData'

function App() {

  return (
    <>

     <h1>Avançando em React</h1>


     <div>
      {/* imagem em public */}
        <div>
            <img src='/ben10.jfif' alt='ben 10'/>
        </div>

        {/* imagem em assets */}
        <div>
          <img src={vovo} alt="vovo max" />
        </div>

    </div>

    <ManageData/>

    <ListRender/>


    <ConditionalRender/>

    </>
  )
}

export default App
