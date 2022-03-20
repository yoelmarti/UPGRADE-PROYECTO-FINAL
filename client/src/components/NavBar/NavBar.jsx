import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { UserContextLogin } from '../../contexts/UserContext/UserContextLogin'



const NavBar = () => {
  const {user, logoutUser } = useContext(UserContextLogin)
  const { id } = useParams();

  return (
    <div className='shadow-2xl'>
      <nav className='flex flex-row justify-around h-[70px] items-center'>
          <Link to='/'>
            <img className='h-[70px]' src={`http://localhost:4000/public/app-logo.png`} alt='app-logo'></img>
          </Link>
          <Link to='villages'>Pueblos</Link>
          {user ? null :
            <Link to='/registro'>Registro</Link>
          }
          {user ? 
            <p className='cursor-pointer' onClick={logoutUser}>Logout</p> : 
            <Link to='/iniciar-sesion'>Login</Link>
          }
          {user ? 
            <Link to={`/users/${id}/profile`}>Perfil</Link> :
            null
          }
      </nav>
    </div>
  )
}

export default NavBar;