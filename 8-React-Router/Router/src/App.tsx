import './App.css'


//1- config react-router
import { Routes, BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import About from './pages/about/About'
import NavBar from './components/NavBar/NavBar'
import Person from './pages/person/Person'

function App() {

  return (
    <>
     <h1>React Router</h1>

     <BrowserRouter>
       <NavBar/>{/* Como tem componentes do react router ele tem que ser renderizado aqui  */}
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          {/* 4- rota dinamica */}
          <Route path='/people/:id' element={<Person/>}/>

/     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
