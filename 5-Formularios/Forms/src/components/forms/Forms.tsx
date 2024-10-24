
import { useState } from "react"
import "./Forms.css"


const Forms = () => {

  // 3- Gerenciamento de dados
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleName = (e) => {
    setName(e.target.value)
  }
  

  const handleSubmit = (e) => {
    e.preventDefault(); //impede a pagina de recarregar dps de dar o submit
    alert(`Sucesso, enviando o formulario, ${name}, ${email}`)
  }
  
  return (
    <div>
      {/* 5- envio de forms */}
        {/*1-criação de forms*/}
        <form onSubmit={handleSubmit}>
            <div className="container">
                <label htmlFor="name">Nome: </label>
                <input type="text" name="name" placeholder="Digite seu nome" onChange={handleName}/>
            </div>

            {/* 2-label envolvendo input */}
            <label className="container">
              <span>Emai:</span>
              <input type="text" name='email' placeholder="Digite seu email" onChange={(e) => setEmail(e.target.value)}/>
            </label>


            <input className="send" type="submit" value='Enviar' />

        </form>

    </div>
  )
}

export default Forms