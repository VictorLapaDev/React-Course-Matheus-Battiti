
import { useState } from "react"
import "./Forms.css"

interface props{
  user: object
}

const Forms = ({user}: props) => {

  // 6- controlled inputs

  // 3- Gerenciamento de dados
  const [name, setName] = useState(user ? user.name : '');
  const [email, setEmail] = useState(user ? user.email : ''); //ve se usuario ja existe ou se ele ja tem o valor armazenado, preenchendo diretamente o input
  const [bio, setBio] = useState('')
  const [role, setRole] = useState('')


  const handleName = (e) => {
    setName(e.target.value)
  }
  

  const handleSubmit = (e) => {
    e.preventDefault(); //impede a pagina de recarregar dps de dar o submit
    alert(`Sucesso, enviando o formulario, ${name}, ${email}`)

    //7- limpar formulario
    setName('')
    setEmail('')
    setBio('')
  }
  
  return (
    <div>
      {/* 5- envio de forms */}
        {/*1-criação de forms*/}
        <form onSubmit={handleSubmit}>
            <div className="container">
                <label htmlFor="name">Nome: </label>
                <input type="text" name="name" placeholder="Digite seu nome" onChange={handleName} value={name}/>
            </div>

            {/* 2-label envolvendo input */}
            <label className="container">
              <span>Email:</span>
              <input type="text" name='email' placeholder="Digite seu email" onChange={(e) => setEmail(e.target.value)} value={email}/>
            </label>


            {/* 8- text area */}
            <label >
              <textarea name="bio" placeholder="Descrição do usuario" onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
            </label>


            {/* 9- select */}
            <label className="container">
              <span>Funções do sistema</span>
              <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
                <option value="user">Usuario</option>
                <option value="editor">Editor</option>
                <option value="admin">Administrador</option>
              </select>
            </label>

            <input className="send" type="submit" value='Enviar' />

        </form>

    </div>
  )
}

export default Forms