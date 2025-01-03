import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

import { useAuthentication } from "../../hooks/useAuthentication";
import { useAuthValue } from "../../context/AuthContext";

const NavBar = () => {
  const { user } = useAuthValue();

  return (
    <nav className={styles.navbar}>
      <NavLink to={"/"} className={styles.brand}>
        Mini <span>Blog</span>
      </NavLink>

      <ul className={styles.links_list}>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : "")}
            to={"/"}
          >
            Home
          </NavLink>
        </li>

        {!user && (
          <>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? styles.active : "")}
                to={"/login"}
              >
                Entrar
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? styles.active : "")}
                to={"/register"}
              >
                Cadastrar
              </NavLink>
            </li>
          </>
        )}

        {user && (
          <>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? styles.active : "")}
                to={"/posts/create"}
              >
                Criar Post
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? styles.active : "")}
                to={"/dashboard"}
              >
                Dashboard
              </NavLink>
            </li>
          </>
        )}

        <li>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : "")}
            to={"/about"}
          >
            Sobre
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
