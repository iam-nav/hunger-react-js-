import React,{useState} from 'react'
import './newuser.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faLock,faEnvelope } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import logo from '../layouts/images/free_food.png'
import { Link } from 'react-router-dom'
export default function NewUser() {
const [name,setname]= useState('')
const [email,setemail]=useState('')
const [password,setpassword]= useState('')
const [conpassword,setconpassword]=useState('')

const settingName = (event)=>{setname(event.target.value)}
const settingEmail = (event)=>{setemail(event.target.value)}
const settingPassword = (event)=>{setpassword(event.target.value)}
const settingConfirmPassword = (event)=>{setconpassword(event.target.value)}


const CreatingUser=()=>{
    axios({
        method: 'post',
        url: 'localhost:3001/register',
        data: {
          name:name,
          email:email,
          password:password,
          confirmPassword:conpassword
        }
      }).then((response)=>{
          console.log(response.data)
    //     Cookies.set('user',response.data.token)
    //     window.location.reload(true)
    //   }).catch((e)=>{
    //     this.setState({
    //       isvisible:false,
    //       errorMessage:e.response.data.messageValidation,
    //       RegisterBtn:false,
    //       RegisterSpinner:true
    //     })
    //   })
}).catch((e)=>{
    console.log(e)
})


}


    return (
        <div>
        <div className="register">
            <div className="reg_container" >
            <img src={logo} width="120px" style={{objectFit:"cover",marginLeft:"37.8%"}}></img>
             <h1 style={{textAlign:"center",fontSize:"20px"}}>R E G I S T E R </h1>
            <FontAwesomeIcon  icon={faUser} style={{position:"absolute",top:"36%",left:"36%",fontSize:"20px"}}/><input className="reg" name="name"  value={name} onChange={settingName} placeholder="Name"></input>
            <FontAwesomeIcon  icon={faEnvelope} style={{position:"absolute",top:"46.3%",left:"36%",fontSize:"20px"}}/><input className="username" name="email" value={email} onChange={settingEmail} placeholder="Email@example.com"></input>
            <FontAwesomeIcon  icon={faLock} style={{position:"absolute",top:"57.8%",left:"36%",fontSize:"20px"}}/><input className="username" name="password" type="password" value={password} onChange={settingPassword} placeholder="Password"></input>
            <FontAwesomeIcon  icon={faLock} style={{position:"absolute",top:"69.6%",left:"36%",fontSize:"20px"}}/><input className="username" name="confirmpassword" type="password" value={conpassword} onChange={settingConfirmPassword} placeholder="ConfirmPassword"></input>
<button className="loginbtn" onClick={CreatingUser}>Register</button>
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
