import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContextLogin } from '../../contexts/UserContext/UserContextLogin'



const NavBar = () => {
  const {user, logoutUser } = useContext(UserContextLogin)
  
  return (
    <nav className='flex flex-row justify-around'>
        <Link to='/'>Home</Link>
        <Link to='villages'>Pueblos</Link>
        {user ? null :
          <Link to='/registro'>Registro</Link>
        }
        {user ? 
          <p onClick={logoutUser}>Logout</p> : 
          <Link to='/iniciar-sesion'>Login</Link>
        }
    </nav>
  )
}

export default NavBar;