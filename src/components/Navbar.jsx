import { NavLink } from "react-router-dom"

// Custom Hooks
import useAuth from "../hooks/useAuth"

// Styles


function Navbar() {
  const { isAuthenticated, logout } = useAuth()

  return "Navbar, logo, fecha, avatar, +"

  // Aqui debe ir el nombre de la app con su logo, la fecha(DateNow), avatar para ir a perfil y el + de añadir noticia
}

export default Navbar