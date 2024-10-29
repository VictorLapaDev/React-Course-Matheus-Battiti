
import { useEffect, useState } from 'react'
import './App.css'
import {useFetch} from './hooks/useFetch'

const url = 'http://localhost:3000/products'

function App() {


  const[products, setProducts] = useState([]);
  const [name, setName] = useState('');
  const[price, setPrice] = useState('');

  //4- custom hook
  const {data: item, loading} = useFetch(url); //retorna todo a lista do json em um objeto chamado item, dessa forma só utilizar ele para puxar algo

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

  //2- Adicionando daods
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();//para não recarregar a pagina ao dar submit
      
      const product = {
        name: name,
        price: price
      }

      const response = await fetch(url, {
        method: "POST",
        headers: {
        "Content-Type": "application/json"
        },
        body: JSON.stringify(product)

        
        
      });
      //3 - carregamento dinâmico
      const addedProduct = await response.json() //pega o valor do novo json 
      setProducts((prevProducts) =>   [...prevProducts, addedProduct]) //adiciona no state
      setName('')
      setPrice('')

      //Meu jeito
        // Após adicionar o produto, buscar a lista atualizada
        //fetchProducts();
        // Limpar os inputs
        //setName('');
        //setPrice('');

    }
    catch(error){
      console.log(error)
    }



  }




    useEffect(() => {
      fetchProducts(); // Chama a função assíncrona
    }, []);



  return (
    <>
        <h1>Lista de Produtos</h1>
        {loading && (<p>Carregando dados</p>)}
        <ul>
          {products.map((product) => (
            <li key={product.id}>{product.name} - R$ {product.price}</li>
          ))}
        </ul>

        <form onSubmit={handleSubmit}>

          <label>
            Nome:
            <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)}/>
          </label>

          <label>
            Price:
            <input type="number" name="price" value={price} onChange={(e) => setPrice(e.target.value)}/>
          </label>
          
          <input type="submit" value="Criar"/>

        </form>
          
    </>
  )
}

export default App
