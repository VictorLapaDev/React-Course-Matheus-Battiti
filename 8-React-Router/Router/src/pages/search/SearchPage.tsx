import './SearchPage.css'
import { useSearchParams, Link } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'


const SearchPage = () => {

    const [searchParams] = useSearchParams();

    const url = 'http://localhost:3000/people?' + searchParams;

    const {data: items, loading, error} = useFetch(url);

    console.log(items);
  return (
    <div>
      <h1>Resultados disponiveis:</h1>

      <ul className='people'>
      {items &&
        items.map((item: object) => {
            return(

                <li key={item.id}>
                    <h2>Nome: {item.name}</h2>
                    <h2>Idade: {item.age}</h2>
                    <Link to={`/people/${item.id}`}>Mais informações</Link>
                </li>
            )
        })}
        </ul>
    </div>
  )
}

export default SearchPage
