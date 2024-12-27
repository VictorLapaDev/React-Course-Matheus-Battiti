import { Route, Routes } from 'react-router-dom'
import './App.css'
import Page1 from './pages/page1/page1'
import Page2 from './pages/page2/page2'
import Page3 from './pages/page3/page3'
import NavBar from './components/navBar/NavBar'

function App() {

  return (
    <>
      <NavBar/>
      
      <Routes>
        <Route path='/' element={<Page1/>}/>
        <Route path='/2' element={<Page2/>}/>
        <Route path='/3' element={<Page3/>}/>
      </Routes>
    </>
  )
}

export default App
