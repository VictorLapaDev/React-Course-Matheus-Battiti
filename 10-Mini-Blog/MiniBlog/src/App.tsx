import './App.css'

import { Route, Routes, Navigate} from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
    <NavBar/>
      <div className="container">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About />} />
          </Routes>
      </div>
      <Footer/>
    </>
  )
}

export default App
