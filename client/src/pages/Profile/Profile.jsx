import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { UserContextLogin } from '../../contexts/UserContext/UserContextLogin';

const Profile = () => {
    const {user, token } = useContext(UserContextLogin)
    const {userId} = useParams();
    const [profile, setProfile] = useState(user)
    // console.log(user)

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
              console.log(data.data);
              setProfile(data.data);
              console.log(profile);
            });
        } catch (error) {
          console.error(error);
        }
    },[token, userId])



    useEffect(()=>{
        try {
            fetch(`http://localhost:4000/users/${userId}/profile`)
            .then(res => res.json())
            .then(
              (result) => {
                
              }
            )



            fetch(`http://localhost:4000/users/update-user/${userId}`, {
                method: "PUT",
                headers: {
                    Authorization: "Bearer " + token,
                },
            })
            .then((res) => {return res.json();})
            .then((data) => {
                console.log(data.data);
                setProfile(data.data);
                console.log(profile);
            });
        } catch (error) {
            console.error(error);
        }
    },[token, userId])








    // const handleEditUser = async () => {
    //     const request = await fetch('http://localhost:4000/users/login', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify(loginData)
    //         });
    // }
  


    return (
    <div>
        {/* <p>{profile.name}</p>
        <p>{profile.email}</p>
        <img src={profile.avatar} alt='avatar'/> */}
        <p></p>
        <button >Borrar cuenta</button>
    </div>
  )
}

export default Profile