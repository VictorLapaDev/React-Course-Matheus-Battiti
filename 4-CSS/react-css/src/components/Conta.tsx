

interface prop{
    count: number
    myFunction: (newCount: number) => void
}
const Conta = ({count, myFunction}: prop) => {

    


  return (
    <div>
        <h1 style={count<= 10?({color: "blue"}): ({color: "green"})}>Count = {count} </h1>

        <div className="button-container">
            <button className='somar' onClick={() => { myFunction(count + 1) }}>Adicionar</button>
            <button className='tirar' onClick={() => { myFunction(count - 1) }}>Subtrair</button>
        </div>

    </div>
  )
}

export default Conta