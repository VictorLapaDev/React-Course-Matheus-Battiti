import { useState } from 'react'
import './App.css'
import vovo from "./assets/vovoMax.jfif" 
import CarDetails from './components/CarDetails'
import ConditionalRender from './components/ConditionalRender'
import Container from './components/Container'
import ExportFunction from './components/ExportFunction'
import ListRender from './components/ListRender'
import ManageData from './components/ManageData'
import ShowUserName from './components/ShowUserName'
import Message from './components/Message'
import ChangeMessageState from './components/ChangeMessageState'
import Challenge4 from './components/Challenge4'

function App() {

  const car = [
    {id: 1, marca: "Fiat", cor: "Preto", km: 1000, novo: false},
    {id: 2, marca: "Honda", cor: "Azul", km: 200, novo: false},
    {id: 3, marca: "Cherolet", cor: "Vermelho", km: 0, novo: true},
    {id: 4, marca: "Ferrari", cor: "Branco",km: 4000, novo: false},
    {id: 5, marca: "Renault", cor: "Laranja", km: 0, novo: true},
  ]


  const userDetails = [
    {id: 1, name: "Jõao", age: 18, profission:"Dev"},
    {id: 2, name: "Lapa", age: 19, profission:"Junior Dev"},
    {id: 3, name: "Lucas", age: 17, profission:"Medico"},
    {id: 4, name: "Murilo", age: 16, profission:"Veterinario"},
  ]

  function showMessage(){
    alert("Evento do componente pai ")
  }


  const [message, setMessage] = useState("");

  const messageHandle = (msg) =>{
    setMessage(msg);
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


    {/* state lift */}
    <Message message={message}/>
    <ChangeMessageState MyFunction={messageHandle}/>

    {/* Challenge 4 */}
    <h1>Challenge 4</h1>
    {userDetails.map((item) => (
      <Challenge4 key={item.id} age={item.age} id={item.id} name={item.name} profission={item.profission}/>
    ))}

    </>
  )
}

export default App
