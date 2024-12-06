import { NavLink } from "react-router-dom"
import '../NavBar.css'
const NavBar = () => {
  return (
    <div className="navbar">

        <h2>NavBar</h2>

        <nav>
            <NavLink to={'/'}  className={( { isActive }) => (isActive ? 'ativo' : 'naoAtivo')}>
                Page1
            </NavLink>

            <NavLink to={'/2'}  className={( { isActive }) => (isActive ? 'ativo' : 'naoAtivo')}>
                Page2
            </NavLink>

            <NavLink to={'/3'}  className={( { isActive }) => (isActive ? 'ativo' : 'naoAtivo')}>
                Page3
            </NavLink>
        </nav>
        
    </div>
  )
}

export default NavBar
