import './End.css'

interface props{
  myFunction : () => void
}

const End = ({myFunction}: props) => {
  return (
    <div>
        <h1>Game Over</h1>
        <button onClick={myFunction}>Recomeçar jogo</button>
    </div>
  )
}

export default End