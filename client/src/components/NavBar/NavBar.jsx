import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className='flex flex-row justify-around'>
        <Link to='/'>Home</Link>
        <Link to='/pueblos'>Pueblos</Link>
        <Link to='/registro'>Registro</Link>
        <Link to='/iniciar-sesion'>Login</Link>
    </nav>
  )
}

export default NavBar;