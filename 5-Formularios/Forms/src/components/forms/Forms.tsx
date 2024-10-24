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

            {/* 2-label envolvendo input */}
            <label className="container">
              <span>Emai:</span>
              <input type="text" name='email' placeholder="Digite seu email" />
            </label>


            <input className="send" type="submit" value='Enviar' />

        </form>

    </div>
  )
}

export default Forms