import React, { useContext, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { UserContextLogin } from '../../contexts/UserContext/UserContextLogin';

//Estado inicial del obj del login
const INITIAL_STATE_LOGIN = {
    email: '',
    password: ''
}

const LogIn = () => {
    const { loginUser } = useContext(UserContextLogin)
    const { state } = useLocation();
    const [loginData, setLoginData] = useState(INITIAL_STATE_LOGIN);

const submitForm = (ev) => {
    ev.preventDefault();
    loginUser(loginData, state ? state.prevRoute : null);
    setLoginData(INITIAL_STATE_LOGIN)
};

const handleInput = (ev) => {
    const {name, value} = ev.target;
    setLoginData({...loginData, [name]: value})
    // console.log(loginData.email)
};
    
return (
    <div className='flex flex-col w-[400px] m-auto text-center bg-slate-200 rounded-md'>
        <div className='flex flex-col'>
            <p className='text-2xl'>Iniciar sesión</p>
            <form className='flex flex-col' onSubmit={submitForm}> 
                <label>Correo Electrónico</label>
                <input type='text' name='email' value={loginData.email} onChange={handleInput} className='w-[300px] border-2 rounded-md border-black'></input>
                <label>Contraseña</label>
                <input type='password' name='password' value={loginData.password} onChange={handleInput} className='w-[300px] border-2 rounded-md border-black'></input>
                <p>¿Has olvidado tu contrseña?</p>
                <button type="submit">Iniciar sesión</button>
                <p>¿Aun no estas registrado? <Link to='/registro'>Crea tu cuenta</Link></p>
            </form>
        </div>
    </div>
)
}

export default LogIn;