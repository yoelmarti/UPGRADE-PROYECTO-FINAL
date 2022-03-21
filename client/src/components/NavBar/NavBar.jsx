import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContextLogin } from '../../contexts/UserContext/UserContextLogin'



const NavBar = () => {
  const { user, logoutUser } = useContext(UserContextLogin);
  return (
    <div className='shadow-2xl relative bg-[#CC998D]'>
      <nav className='flex flex-row h-[70px] items-center'>
          <div className='pl-10 basis-1/2'>
            <Link to='/'><img className='h-[70px]' src={`http://localhost:4000/public/app-logo.png`} alt='app-logo'/></Link>
          </div>
          <div className='flex justify-end basis-1/2 pr-6'>
          <Link to='villages'>Pueblos</Link>
            {user ? null :
              <Link to='/registro' className='pl-6'>Registro</Link>
            }
            {user ? 
              <Link to={`/users/${user._id}/profile`} className='pl-6' ><img src={`http://localhost:4000/public/profile-icon.svg`} alt='perfil'/></Link> :
              <img className='w-[25px]' src={`http://localhost:4000/public/slash-icon.svg`} alt='slash'/>
            }
            {user ? 
              <img className='cursor-pointer w-[15px] pl-6' onClick={logoutUser} src={`http://localhost:4000/public/logout-icon.svg`} alt='logout'/> : 
              <Link to='/iniciar-sesion' className=''>Login</Link>
            }
          </div>
      </nav>
    </div>
  )
}

export default NavBar;