import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { UserContextLogin } from '../../contexts/UserContext/UserContextLogin';

const Profile = () => {
    const { token,logoutUser } = useContext(UserContextLogin);
    const navigate = useNavigate()
    const {userId} = useParams();
    const [profile, setProfile] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [editState, setEditState] = useState(false);
    
    useEffect(()=>{
        try {
            fetch(`http://localhost:4000/users/${userId}/profile`, {
              method: "GET",
              headers: {
                Authorization: "Bearer " + token,
              },
            })
            .then((res) => {return res.json();})
            .then((data) => {
              console.log(data.data)
                setProfile(data.data);
              setIsLoaded(true)
            })
        } catch (error) {
          console.error(error);
        }
    },[token, userId])

    
    const handleDelete = () =>{
        try {
            fetch(`http://localhost:4000/users/${userId}/profile/delete`, {
                method: "DELETE",
                headers: {
                    Authorization: "Bearer " + token,
                  },
            })
            .then((res) => {return res.json();})
            .then((data) => {
                console.log(data)
            });
        } catch (error) {
            console.error(error);
        }
        logoutUser()
        window.alert('Usuario eliminado correctamente');
    }


    const editUser = async () =>{
        const body = {
            name: profile.name,
            email: profile.email,
            password: profile.password,
            birthdate: profile.birthdate,
            profession: profile.profession,
            children: profile.children,
            avatar: profile.avatar
        }

        try {
            const request = await fetch(`http://localhost:4000/users/${userId}/update-user`, { 
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: "Bearer " + token
                },
                body: JSON.stringify(body),
            });
            const response = await request.json();
            console.log(response);
            navigate(`/users/${userId}/profile`);
            setEditState(!editState)
        } catch (error) {
            console.error(error);
        }
    }

    const showEditUser = () =>{
        setEditState(!editState)
    }
    
    const submitForm = (ev) => {
        ev.preventDefault();
        editUser();
    }
    
    const handleInput = (ev) => {
        const {name, value} = ev.target;
        setProfile({...profile, [name]: value});
    };


    return (
    <div>
        {editState ? 
        <form className='text-white' onSubmit={submitForm}>
        <div className='pb-2 pt-4'>
                        
                        <input required type='text' name='name' placeholder={profile.name} value={profile.name} onChange={handleInput} className='block w-full p-4 text-lg rounded-md bg-black' ></input>
                    </div>

                    <div className='pb-2 pt-4'>
                        <input required type='text' name='email' placeholder={profile.email} value={profile.email} onChange={handleInput} className='block w-full p-4 text-lg rounded-md bg-black'></input>
                    </div>

                    <div className='pb-2 pt-4'>
                        <input required type='password' name='password' placeholder={profile.password} value={profile.password} onChange={handleInput} className='block w-full p-4 text-lg rounded-md bg-black'></input>
                    </div>

                    <div className='pb-2 pt-4'>
                        <input required type='text' name='birthdate'  placeholder={profile.birthdate} value={profile.birthdate} onChange={handleInput} className='block w-full p-4 text-lg rounded-md bg-black'></input>
                    </div>

                    <div className='pb-2 pt-4'>
                        <input required type='text' name='profession' placeholder={profile.profession} value={profile.profession} onChange={handleInput} className='block w-full p-4 text-lg rounded-md bg-black'></input>
                    </div>

                    <div className='pb-2 pt-4'>
                        <input required type='text' name='children' placeholder={profile.children} value={profile.children} onChange={handleInput} className='block w-full p-4 text-lg rounded-md bg-black'></input>
                    </div>

                    <div className='pb-2 pt-4 '>
                        <input placeholder='URL de tu foto de perfil' type='file' name='avatar' value={profile.avatar} onChange={handleInput} className='block w-full p-4 text-lg rounded-md bg-black file:rounded-full file:bg-[#744253] file:border-0 hover:file:bg-bg-[#CC998D] file:font-normal file:mr-4 file:py-2 file:px-4 file:text-sm text-sm' ></input>
                    </div>
                    <div className='px-4 pb-2 pt-4'>
                        <button type='submit' className='uppercase block w-full p-4 text-lg rounded-full bg-[#744253] hover:bg-[#CC998D] focus:outline-none'>GUARDAR</button>
                    </div>
        </form>
        :isLoaded ?
            <>
                <p>{profile.email}</p>
                <p>{profile.name}</p>
                <img src={profile.avatar} alt='avatar'/>
            </>
            : <>Is Loading...</>
        }
        <button onClick={handleDelete}>Borrar cuenta</button>
        <button onClick={showEditUser}>Editar</button>
    </div>
  )
}

export default Profile