
import { useEffect, useState } from 'react'
import './App.css'

const url = 'http://localhost:3000/products'

function App() {


  const[products, setProducts] = useState([]);

    //1- Resgatando dados(fetch)
    useEffect(async() => {

        const response = await fetch(url) //pega os dados de dentro da url

        const data = await response.json() //pega os dados json e transforma em objeto

        setProducts(data) //seta os dados
      
        //é feito dentro do useEffect para chamar a requisição só uma vez
    }, [])

    console.log(products)


  return (
    <>
        <h1>Lista de Produtos</h1>
    </>
  )
}

export default App
