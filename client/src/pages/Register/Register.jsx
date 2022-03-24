import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';

//Estado inicial del obj del registro
const INITIAL_STATE_REGISTER = {
    name: '',
    email: '',
    password: '',
    birthDate: '',
    profession:'',
    children:'',
    // avatar: '',
}

const Register = () => {
    const navigate = useNavigate();
    const [registerFormData, setRegisterFormData] = useState(INITIAL_STATE_REGISTER);

    const registerUser = async () => {
        // ev.preventDefault();
        //Se asignan los valores de lo recogido en los inputs y se asigna al body
        const body = {
            name: registerFormData.name,
            email: registerFormData.email,
            password: registerFormData.password,
            birthDate: registerFormData.birthDate,
            profession: registerFormData.profession,
            children: registerFormData.children,
            // avatar: registerFormData.avatar || 'http://localhost:4000/public/avatar.png',
        }

        try {
            const request = await fetch('http://localhost:4000/users/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body),
            });
            const response = await request.json();
    
            console.log(response);
            navigate('/iniciar-sesion');
        } catch (error) {
            console.error(error);
        }

    };

    const submitForm = (ev) => {
        ev.preventDefault();
        
        registerUser();
    }


    const handleInput = (ev) => {
        const {name, value} = ev.target;
        setRegisterFormData({...registerFormData, [name]: value});
    };

    return (
        <div className='min-h-screen flex items-stretch text-white relative'>
        <div className="lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center bg-[url('https://images.unsplash.com/photo-1620581261303-e905d1dbe0eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')]">
            <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
            <div className="w-full px-24 z-10">
                
                <p className="text-4xl font-medium text-left tracking-wide">Crea tu cuenta y podrás:</p>
                <ul className='pt-6 marker:text-[#744253]'>
                    <li className='list-disc list-inside pl-6'>Visualizar las casas disponibles en cada pueblo</li>
                    <li className='list-disc list-inside pl-6'>Contactar con los Ayuntamientos</li>
                    <li className='list-disc list-inside pl-6'>Colaborar a revitalizar nuestros pueblos</li>
                </ul>
            </div>
        
        </div>
        <div className="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0">
            <div className="absolute lg:hidden z-10 inset-0 bg-gray-500 bg-no-repeat bg-cover items-center bg-[url('https://images.unsplash.com/photo-1577495508048-b635879837f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80')]">
                <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
            </div>
            
            <div className='w-full py-6 z-20 '>
                <form className='sm:w-2/3 w-full px-4 lg:px-0 mx-auto' onSubmit={submitForm}>
                    <div className='pb-2 pt-4'>
                        
                        <input required type='text' name='name' placeholder='Nombre' value={registerFormData.name} onChange={handleInput} className='block w-full p-4 text-lg rounded-md bg-black' ></input>
                    </div>

                    <div className='pb-2 pt-4'>
                        <input required type='text' name='email' placeholder='Email' value={registerFormData.email} onChange={handleInput} className='block w-full p-4 text-lg rounded-md bg-black'></input>
                    </div>

                    <div className='pb-2 pt-4'>
                        <input required type='password' name='password' placeholder='Contraseña' value={registerFormData.password} onChange={handleInput} className='block w-full p-4 text-lg rounded-md bg-black'></input>
                    </div>

                    <div className='pb-2 pt-4'>
                        <input required type='text' name='birthDate'  placeholder='Fecha de nacimiento: dd/mm/aaaa' value={registerFormData.birthDate} onChange={handleInput} className='block w-full p-4 text-lg rounded-md bg-black'></input>
                    </div>

                    <div className='pb-2 pt-4'>
                        <input required type='text' name='profession' placeholder='Profesión' value={registerFormData.profession} onChange={handleInput} className='block w-full p-4 text-lg rounded-md bg-black'></input>
                    </div>

                    <div className='pb-2 pt-4'>
                        <input required type='text' name='children' placeholder='Nº Hijos' value={registerFormData.children} onChange={handleInput} className='block w-full p-4 text-lg rounded-md bg-black'></input>
                    </div>

                    {/* <div className='pb-2 pt-4 '>
                        <input placeholder='URL de tu foto de perfil' type='file' name='avatar' value={registerFormData.avatar} onChange={handleInput} className='block w-full p-4 text-lg rounded-md bg-black file:rounded-full file:bg-[#744253] file:border-0 hover:file:bg-bg-[#CC998D] file:font-normal file:mr-4 file:py-2 file:px-4 file:text-sm text-sm' ></input>
                    </div> */}

                    <div className='pb-2 pt-4'>
                        <input required type='checkbox' className='accent-[#744253]'></input>
                        <span className='lg:text-black md:text-white'>Acepto la Política de Privacidad y el Aviso Legal</span>
                    </div>
                    <div className='px-4 pb-2 pt-4'>
                        <button type='submit' className='uppercase block w-full p-4 text-lg rounded-full bg-[#744253] hover:bg-[#CC998D] focus:outline-none'>CREAR CUENTA</button>
                    </div>
                    <p className='lg:text-black md:text-white'>¿Ya tienes cuenta? <Link to='/iniciar-sesion' className='hover:text-[#CC998D]'>Inicia sesión</Link></p>
                </form>
            </div>
        </div>
    </div>
  )
}



export default Register;