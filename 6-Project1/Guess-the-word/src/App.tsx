
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

  console.log(words);

  return (
    <div className='app'>

      {gameStage === 'start' && <StartScreen/>}
      {gameStage === 'game' && <Game/>}
      {gameStage === 'end' && <End/>}

    </div>
  )
}

export default App
