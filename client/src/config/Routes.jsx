import React from "react";

const Home = React.lazy(()=>import('../pages/Home/Home.jsx'));
const NotFound = React.lazy(()=>import('../pages/NotFound/NotFound'));
const Villages = React.lazy (()=>import('../pages/Villages/Villages'));
const VillageDetail = React.lazy (()=>import('../pages/Villages/VillageDetail/VillageDetail'));
const Houses = React.lazy(()=>import('../pages/Villages/VillageDetail/Houses/Houses.jsx'))
const Register = React.lazy (()=>import('../pages/Register/Register'));
const LogIn = React.lazy (()=>import('../pages/LogIn/LogIn'));


const routes = [
    {
        exact: true,
        path: "",
        element: <Home/>,
    },
    {
        path: "/villages",
        element: <Villages/>
    },
    {
        path: "/villages/:villageId",
        element: <VillageDetail/> 
    },
    {
        path: "/houses",
        element: <Houses/> 
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