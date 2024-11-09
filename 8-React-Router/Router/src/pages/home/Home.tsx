import './Home.css'
import '../../hooks/useFetch'
import axios, { Axios } from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const Home = () => {

  const url = 'http://localhost:3000/people'
  const [data, setData] = useState([]);

  const fetchApi = async (url: string) => {
    try {
      const response = await axios.get(url);
      setData(response.data); // Atualiza o estado com os dados recebidos
      console.log(response.data); // Exibe os dados no console
    } catch (error) {
      console.log(error); // Exibe erros no console, se houver
    }
  };


  useEffect(() => {
    fetchApi(url); // Chama a função fetchApi quando o componente é montado
  }, []); // Array de dependências vazio para que o efeito execute apenas uma vez


  return (
    <div>
      <h1>Pessoas:</h1>
    
      <ul className='people'>

      {data.map((item: object) => (
        <li key={item.id}>Nome: {item.name}, Idade: {item.age}
        {/* 4- rota dinamica */}
        <Link to={`/people/${item.id}`}>Detalhes</Link>
        </li>
      ))} 

    </ul>

 </div>
  )
}

export default Home



