import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';

//Estado inicial del obj del registro
const INITIAL_STATE_REGISTER = {
    name: '',
    email: '',
    password: '',
    birthDate: '',
    profession:'',
    sons:'',
    photo: '',

}

const Register = () => {
    const navigate = useNavigate();
    const [registerFormData, setRegisterFormData] = useState(INITIAL_STATE_REGISTER);

    const submitForm = (ev) => {
        ev.preventDefault();
        //Se asignan los valores de lo recogido en los inputs y se asigna al body
        const body = {
            name: registerFormData.name,
            email: registerFormData.email,
            password: registerFormData.password,
            birthDate: registerFormData.birthDate,
            profession: registerFormData.profession,
            sons: registerFormData.sons,
            photo: registerFormData.photo,
        }

    const registerUser = async () => {
        try {
            const request = await fetch('http://localhost:4000/users', {
                method: 'POST',
                body: JSON.stringify(body),
                headers: {
                'Content-Type': 'application/json'
                },
            });
            const response = await request.json();
    
            console.log(response);
            navigate('/iniciar-sesion');
        } catch (error) {
            console.error(error);
        }
        };
        registerUser();
    };

    const handleInput = (ev) => {
        const {name, value} = ev.target;
        setRegisterFormData({...registerFormData, [name]: value});
    };

    return (
    <div>
        <div className='flex flex-col w-[400px] m-auto text-center bg-slate-200 rounded-md'>
            <p className='text-2xl'>Formulario de Registro</p>
            <p>Para ver los pueblos que buscan familia y tienen casa disponibles debes estar registrado</p>
            
            <form className='flex flex-col w-[400px]' onSubmit={submitForm}>
                <label>
                    <p>Nombre</p>
                    <input type='text' name='name' value={registerFormData.name} onChange={handleInput} className='w-[300px] border-2 rounded-md border-black' ></input>
                </label>

                <label>
                    <p>Correo Electrónico</p>
                    <input type='text' name='email' value={registerFormData.email} onChange={handleInput} className='w-[300px] border-2 rounded-md border-black'></input>
                </label>

                <label>
                    <p>Contraseña</p>
                    <input type='password' name='password' value={registerFormData.password} onChange={handleInput} className='w-[300px] border-2 rounded-md border-black'></input>
                </label>

                <label>
                    <p>Fecha de Nacimiento</p>
                    <input type='date' name='birthDate' value={registerFormData.birthDate} onChange={handleInput} className='w-[300px] border-2 rounded-md border-black'></input>
                </label>

                <label>
                    <p>Profesión</p>
                    <input type='text' name='profession' value={registerFormData.profession} onChange={handleInput} className='w-[300px] border-2 rounded-md border-black'></input>
                </label>

                <label>
                    <p>Hijos</p>
                    <input type='text' name='sons' value={registerFormData.sons} onChange={handleInput} className='w-[300px] border-2 rounded-md border-black'></input>
                </label>

                <label>
                    <p>Foto de Perfil</p>
                    <input type='file' name='photo' value={registerFormData.photo} onChange={handleInput} ></input>
                </label>

                <label>
                    <input type='checkbox'></input>
                    <span>Acepto la política de privacidad y el Aviso Legal</span>
                </label>
                <button type='submit'>Registrarme ahora</button>

                <span>¿Ya estas registrado?<Link to='/iniciar-sesion'>Inicia sesión</Link></span>
            </form>
        </div>
    </div>
  )
}



export default Register;