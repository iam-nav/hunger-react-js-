import React from 'react'
import './newuser.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faLock,faEnvelope } from '@fortawesome/free-solid-svg-icons'

import logo from '../layouts/images/free_food.png'
import { Link } from 'react-router-dom'
export default function newUser() {
    return (
        <div>
        <div className="register">
            <div className="reg_container" >
            <img src={logo} width="120px" style={{objectFit:"cover",marginLeft:"37.8%"}}></img>
             <h1 style={{textAlign:"center",fontSize:"20px"}}>R E G I S T E R </h1>
            <FontAwesomeIcon  icon={faUser} style={{position:"absolute",top:"36%",left:"36%",fontSize:"20px"}}/><input className="reg" placeholder="Name"></input>
            <FontAwesomeIcon  icon={faEnvelope} style={{position:"absolute",top:"46.3%",left:"36%",fontSize:"20px"}}/><input className="username" placeholder="Email@example.com"></input>
            <FontAwesomeIcon  icon={faLock} style={{position:"absolute",top:"57.8%",left:"36%",fontSize:"20px"}}/><input className="username" type="password" placeholder="Password"></input>
            <FontAwesomeIcon  icon={faLock} style={{position:"absolute",top:"69.6%",left:"36%",fontSize:"20px"}}/><input className="username" type="password" placeholder="ConfirmPassword"></input>
<button className="loginbtn">Register</button>
<span style={{textAlign:"center"}}><h4 >Already Have Account? 
<Link to="/login">
    <span style={{textDecoration:"underline",cursor:"pointer"}}>Login Now</span>
    </Link>
    </h4></span>
    
            </div>
        </div>
        </div>
    )
}
