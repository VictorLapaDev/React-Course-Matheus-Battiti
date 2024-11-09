import { useParams } from 'react-router-dom'
import './Person.css'

const Person = () => {
    // 4- rota dinamica
    const { id } = useParams();


  return (
    <div>
      <p>Id do produto {id}</p>
    </div>
  )
}

export default Person
