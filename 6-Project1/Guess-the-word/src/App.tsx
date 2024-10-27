
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

  const [pickedWord, setPickedWord] = useState('');
  const [pickedCategory, setPickedCategory] = useState('');
  const [letters, setLetters] = useState([]);

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(3);
  const [score, setScore] = useState(0);


  //pick word and category
  const pickWord = () => {

    //pick random category
    const categories = Object.keys(words)
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)]

    //pick random word
    const word = words[category][Math.floor(Math.random() * words[category].length)]

    return {word, category}
  }




  //Start the game
  const startGame = () => {

    //pick word and category
    const{word, category} = pickWord();

    let letters = word.split('');
    letters = letters.map((l: string) => l.toLowerCase())

    //set status
    setPickedWord(word);
    setPickedCategory(category);
    setLetters(letters);
    
    //Change the stage of game
    setGameStage(stages[1].name)
  }



  //Processa a letra que é inserida
  const verifyLetter = () => {
    setGameStage(stages[2].name);
  }

  //Restart game
  const restartGame = () => {
    setGameStage(stages[0].name)
  }


  return (
    <div className='app'>

      {gameStage === 'start' && <StartScreen myFunction={startGame}/>}
      {gameStage === 'game' && <Game myFunction={verifyLetter} letters={letters} pickedCategory={pickedCategory} pickedWord={pickedWord} guessedLetters={guessedLetters} wrongLetters={wrongLetters} guesses={guesses} score={score}/>}
      {gameStage === 'end' && <End myFunction={restartGame}/>}

    </div>
  )
}

export default App
