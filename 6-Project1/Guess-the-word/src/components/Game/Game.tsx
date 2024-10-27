import './Game.css'

interface props{
  myFunction : () => void
}

const Game = ({myFunction}: props) => {
  return (
    <div>
      <h1>Game</h1>
        <button onClick={myFunction}>Finalizar jogo</button>
    </div>
  )
}

export default Game