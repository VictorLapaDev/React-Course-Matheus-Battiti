import './App.css'

import { Route, Routes, Navigate} from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'

function App() {

  return (
    <>
      <div className="container">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About />} />
          </Routes>
      </div>
    </>
  )
}

export default App
