import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import { UserContextLogin } from '../../contexts/UserContext/UserContextLogin';

const Profile = () => {
    const {user} = useContext(UserContextLogin)
    const {userId} = useParams();
    // console.log(user)

    try {
        fetch(`http://localhost:4000/users/${userId}/profile`)
        .then((res)=>{return res.json()})
        .then((data)=>{ 
        //   console.log(data)
        })
    } catch (error) {
        console.error(error)
    }
  
    return (
    <div>
        <p>{user.name}</p>
        <p>{user.email}</p>
        <img src={`http://localhost:4000/public/${user.avatar}`} alt='avatar'/>
        <p></p>
    </div>
  )
}

export default Profile