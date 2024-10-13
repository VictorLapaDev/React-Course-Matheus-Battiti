import './App.css'
import vovo from "./assets/vovoMax.jfif" 
import CarDetails from './components/CarDetails'
import ConditionalRender from './components/ConditionalRender'
import Container from './components/Container'
import ExportFunction from './components/ExportFunction'
import ListRender from './components/ListRender'
import ManageData from './components/ManageData'
import ShowUserName from './components/ShowUserName'

function App() {

  const car = [
    {id: 1, marca: "Fiat", cor: "Preto", km: 1000, novo: false},
    {id: 2, marca: "Honda", cor: "Azul", km: 200, novo: false},
    {id: 3, marca: "Cherolet", cor: "Vermelho", km: 0, novo: true},
    {id: 4, marca: "Ferrari", cor: "Branco",km: 4000, novo: false},
    {id: 5, marca: "Renault", cor: "Laranja", km: 0, novo: true},
  ]


  function showMessage(){
    alert("Evento do componente pai ")
  }
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

    {/* desestruturando props */}
    <CarDetails brand='fiat' color='azul' km={1000} novo={true} id={10}/>

    {/* reutilização com loops */}
    {car.map((item) => {
      return(
        
        <CarDetails key={item.id} brand={item.marca} km={item.km} color={item.cor} novo={item.novo} id={item.id}/>
      )
    })}


    {/* utilizando html dentro do componente utilizando o children */}
    <Container>
        <p>Ola, estou dentro do componente</p>
    </Container>

    {/* executando função em componente filho do componente pai */}
    <ExportFunction myFunction={showMessage}/>
    </>
  )
}

export default App
