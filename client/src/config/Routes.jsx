import React from "react";

const Home = React.lazy(()=>import('../pages/Home/Home.jsx'));
const NotFound = React.lazy(()=>import('../pages/NotFound/NotFound'));
const Villages = React.lazy (()=>import('../pages/Villages/Villages'));
const VillageDetail = React.lazy (()=>import('../pages/Villages/VillageDetail/VillageDetail'));
const Register = React.lazy (()=>import('../pages/Register/Register'));
const LogIn = React.lazy (()=>import('../pages/LogIn/LogIn'));

const routes = [
    {
        exact: true,
        path: "",
        element: <Home/>,
    },
    {
        path: "/pueblos",
        element: <Villages/>
    },
    {
        path: "/pueblos/:idPueblo",
        element: <VillageDetail/> 
    },
    {
        path: "/registro",
        element: <Register/> 
    },
    {
        path: "/iniciar-sesion",
        element: <LogIn/> 
    },
    {
        path: "*",
        element: <NotFound/>,
    }
]

export default routes;