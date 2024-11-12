import { Link, NavLink } from 'react-router-dom'
import './NavBar.css'


//2- Navegação entre paginas
const NavBar = () => {
  return (
    <nav>
      {/* <Link to={'/'}>Home</Link>
      <Link to={'/about'}>About</Link> */}
      
      {/* 8- nav link  */}
      <NavLink to={'/'} 
      // className={( { isActive }) => (isActive ? 'ativo' : 'naoAtivo')} {/* Assim consigo fazer um ternario para ele chamar uma classe diferente se esta ativo ou não*/}
      >Home</NavLink> 

      <NavLink to={'/about'}>About</NavLink>

      {/* o active no css muda como o componente fica ao ativado */}
    </nav>
  )
}

export default NavBar
