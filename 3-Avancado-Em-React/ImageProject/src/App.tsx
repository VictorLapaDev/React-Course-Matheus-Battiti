import './App.css'
import vovo from "./assets/vovoMax.jfif" 
import CarDetails from './components/CarDetails'
import ConditionalRender from './components/ConditionalRender'
import ListRender from './components/ListRender'
import ManageData from './components/ManageData'
import ShowUserName from './components/ShowUserName'

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

    {/* useState */}
    <ManageData/>

    {/* renderizando com map */}
    <ListRender/>

    {/* condicional para mostar coisas */}
    <ConditionalRender/>

    {/* utilizando props */}
    <ShowUserName name='Lapa' />

    <CarDetails brand='fiat' color='azul' km={1000} />
    </>
  )
}

export default App
