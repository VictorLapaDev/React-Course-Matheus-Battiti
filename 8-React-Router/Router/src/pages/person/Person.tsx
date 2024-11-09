import { useParams } from 'react-router-dom'
import './Person.css'
import axios from 'axios';
import { useEffect, useState } from 'react';

const Person = () => {

    // 4- rota dinamica
    const { id } = useParams();

    
    // 5- carregamento dado individual
    const [person, setPerson] = useState(Object);
    const url = `http://localhost:3000/people/${id}`

    const fetchApi = async (url: string) => {
        try {
          const response = await axios.get(url);
          setPerson(response.data); // Atualiza o estado com os dados recebidos
          console.log(response.data); // Exibe os dados no console
        } catch (error) {
          console.log(error); // Exibe erros no console, se houver
        }
      };
    
      useEffect(() => {
        fetchApi(url); 
      }, []); 

  return (
    <div>
      <h2>Id da pessoa {id}</h2>
      <p>Nome: {person.name}</p>
      <p>Idade: {person.age}</p>
    </div>
  )
}

export default Person
