import React, { useState} from 'react'
import { useNavigate } from 'react-router-dom';
import useToken from '../../CustomHooks/useToken';



export const UserContextLogin = React.createContext()

const sessionUser = localStorage.getItem('user');

export const UserProvider = ({children}) => {
    const { setToken } = useToken();

    const navigate = useNavigate();
    const [user, setUser] = useState(sessionUser ? JSON.parse(sessionUser) : null);
    
    
    const loginUser = async (loginData, prevRoute) => {
        // const {email, password} = loginData
    
        try {
            const request = await fetch('http://localhost:4000/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(loginData)
            });
            const response = await request.json();

            localStorage.setItem('user', JSON.stringify(response.data.user))
            setToken(response.data.token)

            const token = response.data.token
            // console.log(response.data.token)
            // const existsUser = userData.find(element => element.password === loginData.password && element.email === loginData.email);

    
    if(token){
        setUser(response.data.token);
        // setToken(loginData)
        // localStorage.setItem('user', JSON.stringify(existsUser));
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
        localStorage.removeItem('user');
    };

    const userLoginState = {
        user,
        loginUser,
        logoutUser
    }

    return <UserContextLogin.Provider value={userLoginState}>{children}</UserContextLogin.Provider>
}

