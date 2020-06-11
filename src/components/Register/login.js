import React,{useState} from 'react'
import './login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faLock } from '@fortawesome/free-solid-svg-icons'
import logo from '../layouts/images/free_food.png'
import { Link } from 'react-router-dom'

export default function Login() {
const [username,Setusername] = useState('')
const [password,Setpassword] = useState('')

const user=(event)=>{
      Setusername(event.target.value) 
}
const pass=(event)=>{
    Setpassword(event.target.value) 
}

const login_user = ()=>{
    console.log('username'+username,'password'+password)
}



    return (
        <div>
        <div className="login">
            <div className="container" >
            <img src={logo} width="120px" style={{objectFit:"cover",marginLeft:"37.8%"}}></img>
             <h1 style={{textAlign:"center",fontSize:"20px"}}>L O G I N </h1>
            <FontAwesomeIcon  icon={faUser} style={{position:"absolute",top:"40%",left:"36%",fontSize:"20px"}}/>
            <input className="username" value={username} name="username" onChange={user} placeholder="Username"></input>
            <FontAwesomeIcon  icon={faLock} style={{position:"absolute",top:"52%",left:"36%",fontSize:"20px"}}/>
            <input className="username" name="password" onChange={pass} type="password" placeholder="Password"></input>
<button className="loginbtn" onClick={login_user} >Login</button>
<span style={{textAlign:"center"}}><h4 >Dont Have Account? 
<Link to="/register">
    <span style={{textDecoration:"underline",cursor:"pointer"}}> Create New Account</span>
    </Link>
    </h4></span>
    
            </div>
        </div>
        </div>
    )
}
