import { Link } from 'react-router-dom'
import './NavBar.css'


//2- Navegação entre paginas
const NavBar = () => {
  return (
    <nav>
      <Link to={'/'}>Home</Link>
      <Link to={'/about'}>About</Link>
    </nav>
  )
}

export default NavBar
