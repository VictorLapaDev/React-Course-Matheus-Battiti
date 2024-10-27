import './StartScreen.css'

interface props{
  myFunction : () => void
}

const StartScreen = ({myFunction} : props) => {


  return (
    <div className='start'>
        <h1>Guess The Word</h1>
        <p>Clique no botão para começar a jogar</p>
        <button onClick={myFunction}>Comece a jogar</button>
    </div>
  )
}

export default StartScreen