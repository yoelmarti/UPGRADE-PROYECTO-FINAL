import React, { useState} from 'react'
import { useNavigate } from 'react-router-dom';


export const UserContextLogin = React.createContext()

const sessionUser = sessionStorage.getItem('user');

export const UserProvider = ({children}) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(sessionUser ? JSON.parse(sessionUser) : null);
    
    const loginUser = async (loginData, prevRoute) => {
    try {
        const request = await fetch('http://localhost:4000/users');
        const response = await request.json();

        const existsUser = response.find(element => element.password === loginData.password && element.email === loginData.email);
    
    if(existsUser){
        setUser(existsUser);
        delete existsUser.password;
        sessionStorage.setItem('user', JSON.stringify(existsUser));
        navigate(prevRoute || '/');
        // console.log(existsUser)
    } else {
        setUser(false);
    }
    } catch (error) {
        console.log(error)
    }
    }

    const logoutUser = () => {
        setUser(null);
        sessionStorage.removeItem('user');
    };

    const userLoginState = {
        user,
        loginUser,
        logoutUser
    }

    return <UserContextLogin.Provider value={userLoginState}>{children}</UserContextLogin.Provider>
}

