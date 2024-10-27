// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck


import './App.css'

import StartScreen from './components/StartScreen/StartScreen'
import Game from './components/Game/Game'
import End from './components/End/End'

import { useCallback, useState, useEffect } from 'react'

import {word_list} from './data/words'

const stages = [
  {id: 1, name: 'start'},
  {id: 2, name: 'game'},
  {id: 3, name: 'end'}
]


function App() {

  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(word_list);

  const [, setPickedWord] = useState('');
  const [pickedCategory, setPickedCategory] = useState('');
  const [letters, setLetters] = useState([]);

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(3);
  const [score, setScore] = useState(-200);


  //pick word and category
  const pickWord = useCallback(() => {

    //pick random category
    const categories = Object.keys(words)
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)]

    //pick random word
    const word = words[category][Math.floor(Math.random() * words[category].length)]

    return {word, category}
  }, [words])




  //Start the game
  const startGame = useCallback(() => {

    //limpando todas letras
    clearLetterStates()

    //pick word and category
    const{word, category} = pickWord();

    let letters = word.split(''); //separando a palavra em uma array
    letters = letters.map((l: string) => l.toLowerCase()) //deixando minuscula

    //set status
    setPickedWord(word);
    setPickedCategory(category);
    setLetters(letters);
    
    //Change the stage of game
    setGameStage(stages[1].name)
  }, [pickWord])



  //Processa a letra que é inserida
  const verifyLetter = (letter) => {

    const normalizedLetter = letter.toLowerCase(); //deixa minuscula

    if(guessedLetters.includes(normalizedLetter) || wrongLetters.includes(normalizedLetter)){ //caso a letra ja foi inserida
      return;
    }

    //push guessed letter or remove a guess
    if (letters.includes(normalizedLetter)) {
      setGuessedLetters((actualGuessedLetters) => [ //vê se a letra inserida tem dentro da palavra 
        ...actualGuessedLetters,
        normalizedLetter,
      ]);
    } else {
      setWrongLetters((actualWrongLetters) => [ //se nao estiver, a letra esta errada
        ...actualWrongLetters,
        normalizedLetter,
      ]);

      setGuesses((actualGuesses) => {
        return actualGuesses - 1;
      })
    } 

    
  }


  const clearLetterStates = () => {
    setGuessedLetters([])
    setWrongLetters([]);
  }

  //confere se as tentativas acabaram
  useEffect(() => {
    if(guesses <= 0){
      clearLetterStates() //reset all stages
      setGameStage(stages[2].name) //manda pra tela de game end
    }
  }, [guesses])


  //confere se a condição de vencer foi realizada
  useEffect(() => {
    const uniqueLetters = [... new Set(letters)] //esse set confere as letras dentro da palavra para que ela n se repita nessa nova array, como  exemplo 'ovo' para nao repetir o 'o'

    if(guessedLetters.length === uniqueLetters.length){ //ve se todas as letras foram preenchidas
  
       setScore((actualScore) => ( actualScore + 100 ))

       startGame();
    }

  }, [guessedLetters, letters, startGame])
  
  //Restart game
  const restartGame = () => {
    setScore(0);
    setGuesses(3);
    setGameStage(stages[0].name);
  }



  return (
    <div className='app'>

      {gameStage === 'start' && <StartScreen myFunction={startGame}/>}
      {gameStage === 'game' && <Game myFunction={verifyLetter} letters={letters} pickedCategory={pickedCategory} guessedLetters={guessedLetters} wrongLetters={wrongLetters} guesses={guesses} score={score}/>}
      {gameStage === 'end' && <End myFunction={restartGame} score={score}/>}

    </div>
  )
}

export default App
