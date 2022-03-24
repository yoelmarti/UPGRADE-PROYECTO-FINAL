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
    const [showDeleteModal, setShowDeleteModal] = useState(false)

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
            //   console.log(data.data)
                setProfile(data.data);
              setIsLoaded(true)
            })
        } catch (error) {
          console.error(error);
        }
    },[token, userId])

    const handleShowDelete = () =>{
        setShowDeleteModal(!showDeleteModal)
    }

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
            birthDate: profile.birthDate,
            profession: profile.profession,
            children: profile.children,
            // avatar: profile.avatar
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
        <div className='w-full my-12 min-h-[614px]'>
            <div className='md:w-2/5 w-4/5 m-auto rounded-xl'>
                {editState ? 
                    <form className='m-auto'  onSubmit={submitForm}>
                            <div className='pb-2 pt-4'>
                                <input required type='text' name='name' placeholder={profile.name} value={profile.name} onChange={handleInput} className='block w-3/5 p-4 text-lg px-2 py-2 text-gray-700 noborder  underline'></input>
                            </div>

                            <div className='pb-2 pt-4'>
                                <input required type='text' name='email' placeholder={profile.email} value={profile.email} onChange={handleInput} className='block w-3/5 p-4 text-lg px-2 py-2 text-gray-700  underline'></input>
                            </div>

                            <div className='pb-2 pt-4'>
                                <input required type='password' name='password' placeholder={profile.password} value={profile.password} onChange={handleInput} className='block w-3/5 p-4 text-lg px-2 py-2 text-gray-700  underline'></input>
                            </div>

                            <div className='pb-2 pt-4'>
                                <input required type='text' name='birthDate'  placeholder={profile.birthdate} value={profile.birthdate} onChange={handleInput} className='block w-3/5 p-4 text-lg px-2 py-2 text-gray-700  underline' readOnly></input>
                            </div>

                            <div className='pb-2 pt-4'>
                                <input required type='text' name='profession' placeholder={profile.profession} value={profile.profession} onChange={handleInput} className='block w-3/5 p-4 text-lg px-2 py-2 text-gray-700 underline'></input>
                            </div>

                            <div className='pb-2 pt-4'>
                                <input required type='text' name='children' placeholder={profile.children} value={profile.children} onChange={handleInput} className='block w-3/5 p-4 px-2 py-2 text-gray-700 text-lg underline'></input>
                            </div>

                            {/* <div className='pb-2 pt-4 '>
                                <input placeholder='URL de tu foto de perfil' type='file' name='avatar' value={profile.avatar} onChange={handleInput} className='block w-3/5 p-4 text-lg rounded-md  file:rounded-full file:bg-[#744253] file:border-0 hover:file:bg-bg-[#CC998D] file:font-normal file:mr-4 file:py-2 file:px-4 file:text-sm text-sm' ></input>
                            </div> */}
                            <div className='px-4 pb-2 pt-4'>
                                <button type='submit' className='uppercase block w-3/5 p-4 text-lg rounded-full bg-[#744253] hover:bg-[#CC998D] focus:outline-none'>GUARDAR</button>
                            </div>
                    </form>
                :isLoaded ?
                    <div className='m-auto'>
                        <p className="w-full m-auto pl-[50px] text-7xl text-[#481620] text-center">Mi perfil</p>
                        <div className='pb-2 pt-1'>
                            <p className='block w-3/5 p-4 text-lg'>{profile.name}</p>
                        </div>
                        <div className='pb-2 pt-4'>
                            <p className='block w-3/5 p-4 text-lg'>{profile.email}</p>
                        </div>
                        <div className='pb-2 pt-4'>
                            <p className='block w-3/5 p-4 text-lg'>{profile.password}</p>
                        </div>
                        <div className='pb-2 pt-4'>
                            <p className='block w-3/5 p-4 text-lg'>{profile.birthdate}</p>
                        </div>
                        <div className='pb-2 pt-4'>
                            <p className='block w-3/5 p-4 text-lg'>{profile.profession}</p>
                        </div>
                        <div className='pb-2 pt-4'>
                            <p className='block w-3/5 p-4 text-lg'>{profile.children}</p>
                        </div>
                    </div>
                    : <>Is Loading...</>
                }

                {!editState?
                <div className='flex justify-around my-[10px] '>
                    <button className="mb-2 md:mb-0 bg-red-500 border border-red-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-red-600" onClick={handleShowDelete}>Borrar cuenta</button>
                    <button className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100" onClick={showEditUser}>Editar</button>
                </div>
                : null
                }
                {showDeleteModal ? 

                <div className="w-full  max-w-lg mt-6 p-5 mx-auto my-auto rounded-xl shadow-2xl bg-white ">
                        <div className="">
                            <div className="text-center p-5 flex-auto justify-center">
                                <p className="text-xl font-bold py-4 ">¿Estas seguro?</p>
                                <p className="text-sm text-gray-500 px-8">Seguro que quiere eliminar definitivamente tu cuenta? Una vez aceptes no habra marcha atras.</p>    
                            </div>
                        <div className="p-3   mt-2 text-center space-x-4 md:block">
                            <button onClick={handleShowDelete} className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100">Cancelar</button>
                            <button onClick={handleDelete} className="mb-2 md:mb-0 bg-red-500 border border-red-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-red-600">Borrar</button>
                        </div>
                    </div>
                </div>
                :null}
            </div>
        </div>
  )
}

export default Profile