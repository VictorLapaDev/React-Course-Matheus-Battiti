import './Game.css'

interface props{
  myFunction : () => void,
  pickedWord : string,
  pickedCategory : string,
  letters : string[],
  guessedLetters : string[],
  wrongLetters : string[],
  guesses : number,
  score : number
}

const Game = ({myFunction, letters, pickedCategory, pickedWord, guessedLetters, wrongLetters, guesses, score}: props) => {
  return (
    <div className='game'>
      
      <p className="points">
        <span>Pontuação: {score}</span>
      </p>

      <h2>Adivinhe a palavra</h2>

      <h3 className="tip">
        Dica sobre a palavra: <span>{pickedCategory}</span>
      </h3>

      <p>Você ainda tem {guesses} tentativas</p>

      <div className="wordContainer">

        {letters.map((letter, i) => {
         return guessedLetters.includes(letter) ? (
            <span key={i} className='letter'>{letter}</span>
          ) : (
              <span key={i} className='blankSquare'></span>
          );
        })}

      </div>

      <div className="letterContainer">
        <p>Tente advinhar uma letra da palavra: </p>
        <form >
          <input type="text" name='letter' maxLength={1} required />
          <button>Jogar</button>
        </form>
      </div>

      <div className="wrongLettersContainer">
        <p>Letras já utilizadas:</p>
        {wrongLetters.map((letter, i) => {
          return <span key={i}>{letter}, </span>
        })}
        
      </div>

      {/* <button onClick={myFunction}>Finalizar jogo</button> */}
    </div>
  )
}

export default Game