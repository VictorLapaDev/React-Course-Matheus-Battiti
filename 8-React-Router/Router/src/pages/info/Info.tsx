import './Info.css'

import { useParams } from 'react-router-dom'

const Info = () => {

    const { id } = useParams();

    const url = `http://localhost:3000/people/${id}`
        

  return (
    <div>
      <h1>Mais informações sobre o produto: {id}</h1>
    </div>
  )
}

export default Info
