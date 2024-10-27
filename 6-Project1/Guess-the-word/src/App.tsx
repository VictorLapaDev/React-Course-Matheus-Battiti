
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


  //Start the game
  const startGame = () => {
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
      {gameStage === 'game' && <Game myFunction={verifyLetter}/>}
      {gameStage === 'end' && <End myFunction={restartGame}/>}

    </div>
  )
}

export default App
