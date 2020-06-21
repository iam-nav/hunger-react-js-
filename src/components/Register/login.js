import React,{useState} from 'react'
import './login.css'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faLock } from '@fortawesome/free-solid-svg-icons'
import logo from '../layouts/images/free_food.png'
import { Link } from 'react-router-dom'
import Cookies from 'js-cookie'
import {Login_validation}from './functions/validation'
import Alert from './alert/alert'

export default function Login() {
const [username,Setusername] = useState('')
const [password,Setpassword] = useState('')
const [visible,setvisible]=useState(false)
const [errorMsg,seterrorMsg]=useState('')

const user=(event)=>{Setusername(event.target.value) }
const pass=(event)=>{Setpassword(event.target.value) }

const login_user = ()=>{
    Login_validation(username,password).then((result)=>{
            if(result===undefined){
                AxiosPost()
               }
                seterrorMsg(result)
                setvisible(true)
        })
}

const AxiosPost = ()=>{
    axios({
        method: 'post',
        url: 'http://localhost:8080/login',
        data: {
          email:username,
          password:password,
        }
      }).then((response)=>{
        Cookies.set('user',response.data.token)
        window.location.href ="/"
      }).catch((e)=>{
          setvisible(true)
          seterrorMsg(e.response.data)})
} //sending data to the server by axios


    return (
        <div>
        <div className="login">
            <div className="container" >
            <img src={logo} width="120px" style={{objectFit:"cover",marginLeft:"37.8%"}} alt=""></img>
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
    {visible?<Alert error={errorMsg}></Alert>:null}
            </div>
        </div>
        </div>
    )
}
