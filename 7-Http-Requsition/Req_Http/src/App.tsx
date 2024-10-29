
import { useEffect, useState } from 'react'
import './App.css'

const url = 'http://localhost:3000/products'

function App() {


  const[products, setProducts] = useState([]);

  //1- Resgatando dados(fetch)
  const fetchProducts = async () => { //uma função assincrona
    try {
      const response = await fetch(url);
      const data = await response.json(); // O tipo de data é 'any', deixa de ser um json
      setProducts(data);
    } 
    catch (error) {
      console.error(error);
    }
  };

    useEffect(() => {
      fetchProducts(); // Chama a função assíncrona
    }, []);

    console.log(products) 


  return (
    <>
        <h1>Lista de Produtos</h1>
        <ul>
          {products.map((product) => (
            <li key={product.id}>{product.name} - R$ {product.price}</li>
          ))}

        </ul>
    </>
  )
}

export default App
