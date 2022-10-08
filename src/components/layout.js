import { Outlet, Link } from "react-router-dom";
import React from 'react';
import "./loginform.css";
 
const Layout = () => {
  return (
    <>
       <div>
         
            <Link to="/LoginForm">Login</Link>
 
       </div>
      

      <Outlet />
    </>
  )
};

export default Layout;