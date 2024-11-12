import { useState } from 'react'
import './Search.css'

import { useNavigate } from 'react-router-dom'


const Search = () => {

    const navigate = useNavigate();
    const [search, setSearch] = useState('');

    const handleSubmit = (e: any) => {
        e.preventDefault()

        navigate('/search?q=' + search)

    }

  return (
    <form onSubmit={handleSubmit}>
            <input type="text" onChange={(e) => setSearch(e.target.value)} />
            <input type='submit' value={'Buscar'}/>
    </form> 
  )
}

export default Search
