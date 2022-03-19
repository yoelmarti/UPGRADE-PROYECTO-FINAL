import React, { useContext, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { UserContextLogin } from '../../contexts/UserContext/UserContextLogin';

//Estado inicial del obj del login
const INITIAL_STATE_LOGIN = {
    email: '',
    password: ''
}

const LogIn = () => {
    const { loginUser } = useContext(UserContextLogin);
    const { state } = useLocation();
    const [loginData, setLoginData] = useState(INITIAL_STATE_LOGIN);

const submitForm = (ev) => {
    ev.preventDefault();
    loginUser(loginData, state ? state.prevRoute : null);
    setLoginData(INITIAL_STATE_LOGIN);
};

const handleInput = (ev) => {
    const {name, value} = ev.target;
    setLoginData({...loginData, [name]: value});
};
    
return (
    <div className='min-h-screen flex items-stretch text-white'>
        <div className="lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center bg-[url('https://images.unsplash.com/photo-1619299840914-4b85315e8a3c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=672&q=80')]">
            <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
            <div className="w-full px-24 z-10">
                
                <p className="text-5xl font-medium text-left tracking-wide">Encuentra tu pueblo ideal y empieza a vivir.</p>
            </div>
        
        </div>
        <div className="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0">
            <div className="absolute lg:hidden z-10 inset-0 bg-gray-500 bg-no-repeat bg-cover items-center bg-[url('https://images.unsplash.com/photo-1577495508048-b635879837f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80')]">
                <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
            </div>
            
            <div className='w-full py-6 z-20'>
                <form className='sm:w-2/3 w-full px-4 lg:px-0 mx-auto' onSubmit={submitForm}> 
                    <div className='pb-2 pt-4'>
                        <input type='text' name='email' placeholder='Email' value={loginData.email} onChange={handleInput} className='block w-full p-4 text-lg rounded-md bg-black'></input>
                    </div>
                    <div className='pb-2 pt-4'>
                        <input type='password' name='password' placeholder='Contraseña' value={loginData.password} onChange={handleInput} className='block w-full p-4 text-lg rounded-md bg-black'></input>
                    </div>
                    <div className='text-right lg:text-black hover:underline hover:text-[#CC998D]'>
                        <p>¿Has olvidado tu contrseña?</p>
                    </div>
                    <div className='px-4 pb-2 pt-4'>
                        <button type="submit" className='uppercase block w-full p-4 text-lg rounded-full bg-[#744253] hover:bg-[#CC998D] focus:outline-none'>Iniciar sesión</button>
                    </div>
                    <p className='lg:text-black'>¿Aun no estas registrado? <Link to='/registro' className='hover:text-[#CC998D]'>Crea tu cuenta</Link></p>
                </form>
            </div>
        </div>
    </div>
)
}

export default LogIn;