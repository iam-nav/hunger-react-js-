import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import 'animate.css'
import './popup.css'

 const Popup=(props)=> {
    const [name,setName] = useState('Navjot')
    return (
        <div className="animate__animated animate__fadeInLeft">
        <div className="login">
            <div className="container" >
             <h1 style={{textAlign:"center",fontSize:"30px",marginTop:"15%"}}>Please Enter your Location</h1>
             <FontAwesomeIcon  icon={faUser} style={{position:"absolute",top:"25%",left:"36%",fontSize:"20px"}}/> <input className="username_first" value={name} readOnly></input>
             <FontAwesomeIcon  icon={faMapMarkerAlt} style={{position:"absolute",top:"36.6%",left:"36%",fontSize:"20px"}}/>
             <input className="username" placeholder="Location"></input>
            <button className="loginbtn">Submit</button>
            </div>
        </div>
        </div>

    )
}

export default Popup