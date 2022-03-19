import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import routes from "./config/Routes";

import { UserProvider } from "./contexts/UserContext/UserContextLogin";




function App() {
  
  return (
      <UserProvider>
        <NavBar/>
        <Routes>
          {routes.map((route)=>(
            <Route key={route.path} exact={route.exact} path={route.path} element={<React.Suspense fallback={<>Loading...</>}>{route.element} </React.Suspense>}/>
          ))}
        </Routes>
        <Footer/>
      </UserProvider>
  );
}

export default App;
