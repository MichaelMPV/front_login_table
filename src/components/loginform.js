import React, {useEffect, useState} from "react";
import {  Link } from "react-router-dom";
import { gapi } from "gapi-script";
import "./loginform.css"

 
var user  ="user";
var contraseña  ="user";

const LoginForm = () => {

    useEffect(() => {
        function start() {
            gapi.client.init({
                clientId: "79474543031-tmjo35916ufn421ej3u1i2ljao2apr4s.apps.googleusercontent.com",
                scope: ""
            })
        }
        gapi.load('client: auth2', start)
    })

    const [popupStyle] = useState("hide")

 

    const onSuccess = e => {
        alert("User signed in")
        console.log(e)
    }



 

    return (
        
        <h2 style={{textAlign: 'center'}}> 
        <div className="cover">
            <h1 >Login</h1>
            <input type="text" placeholder="username" id='user'/>
            <input type="password" placeholder="password"  id='password' />

                <div className="login-btn" onClick={onSuccess}><Link to="/Formulario">Login</Link></div>

                <div className={popupStyle}>
                    <h3>Login Failed</h3>
                    <p>Username or password incorrect</p>
                </div>
            
        </div>
        </h2>

        

    )
}

export default LoginForm