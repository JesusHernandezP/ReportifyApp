import { NavLink } from "react-router-dom"

// Custom Hooks
import useAuth from "../hooks/useAuth"

// Styles
import styles from './Navbar.module.css'

function Navbar() {
  const { isAuthenticated, logout } = useAuth()

  return <nav className={styles.mainNav}>
    <NavLink to="/" 
      className={styles.mainNav__a}
    >Inicio</NavLink>
    {isAuthenticated && <NavLink to="/todos" className={styles.mainNav__a}>ToDos</NavLink>}
    {isAuthenticated ? <NavLink to="/" className={styles.mainNav_a} onClick={logout}>Cerrar Sesión</NavLink> : <NavLink to="/login" className={styles.mainNav_a}>Inicio Sesión</NavLink>}

  </nav>
}

export default Navbar