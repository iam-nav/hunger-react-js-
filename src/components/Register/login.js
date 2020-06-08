import React from 'react'
import './login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faLock } from '@fortawesome/free-solid-svg-icons'

import logo from '../layouts/images/free_food.png'
import { Link } from 'react-router-dom'
export default function login() {
    return (
        <div>
        <div className="login">
            <div className="container" >
            <img src={logo} width="120px" style={{objectFit:"cover",marginLeft:"37.8%"}}></img>
             <h1 style={{textAlign:"center",fontSize:"20px"}}>L O G I N </h1>
            <FontAwesomeIcon  icon={faUser} style={{position:"absolute",top:"40%",left:"36%",fontSize:"20px"}}/><input className="username" placeholder="Username"></input>
            <FontAwesomeIcon  icon={faLock} style={{position:"absolute",top:"52%",left:"36%",fontSize:"20px"}}/><input className="username" placeholder="Password"></input>
<button className="loginbtn">Login</button>
<span style={{textAlign:"center"}}><h4 >Dont Have Account? <span style={{textDecoration:"underline",cursor:"pointer"}}> Create New Account</span></h4></span>
            </div>
        </div>
        </div>
    )
}
