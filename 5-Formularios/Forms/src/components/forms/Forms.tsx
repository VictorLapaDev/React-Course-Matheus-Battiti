import "./Forms.css"

const Forms = () => {
  return (
    <div>
        {/*1-criação de forms*/}
        <form>
            <div className="container">
                <label htmlFor="name">Nome: </label>
                <input type="text" name="name" placeholder="Digite seu nome"/>
            </div>

            <input className="send" type="submit" value='Enviar' />
        </form>
    </div>
  )
}

export default Forms