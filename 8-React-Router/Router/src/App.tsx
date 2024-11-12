import './App.css'


//1- config react-router
import { Routes, BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import About from './pages/about/About'
import NavBar from './components/NavBar/NavBar'
import Person from './pages/person/Person'
import Info from './pages/info/Info'
import NotFound from './pages/notFound/NotFound'
import Search from './components/search/Search'
import SearchPage from './pages/search/SearchPage'

function App() {

  return (
    <>
     <h1>React Router</h1>

     <BrowserRouter>
       <NavBar/>{/* Como tem componentes do react router ele tem que ser renderizado aqui  */}
       {/* 9- search */}
       <Search/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          
          {/* 6- nested routes */}
          <Route path='/people/:id/info' element={<Info/>}/>

          {/* 4- rota dinamica */}
          <Route path='/people/:id' element={<Person/>}/>

          {/* 7- not found(404) */}
          <Route path='*' element={<NotFound/>}/>

          {/* 9- search */}
          <Route path='/search' element={<SearchPage/>}/>

     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
