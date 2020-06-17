import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import { Link } from 'react-router-dom'
import geocode from './geocode/geocode'
import Alert from '../../Register/alert/alert'
import 'animate.css'
import './popup.css'
import Axios from 'axios'

 const Popup=(props)=> {
    const [location,setlocation] = useState('')
    const [placeName,setplaceName]= useState([])
    const [longitude,setlongitude]= useState('')
    const [latitude,setlatitude]= useState('')
    const [visible,setvisible]=useState(false)
    const [visibleLocation,setvisibleLocation] = useState(false)

    const settinglocation= async(event)=>{
    
      await setlocation(event.target.value) 
      if( await location.length>0){
      geocode(location,(error,data)=>{
        if(error){
        return  setvisibleLocation(false)
        }
        setvisibleLocation(true)
        setplaceName(data.location)
        setlongitude(data.longitude)
        setlatitude(data.latitude)
    })
}
}


    
function storingPlace() {
  if(!visible){
   return setvisible(true)
  }
  AxiosPost()
}

const AxiosPost=()=>{ 
  setvisible(false)
  axios({
      method: 'post',
      url: 'http://localhost:8080/locationAndFood',
      data: {
       long:longitude,
       lat:latitude,
       place:placeName
      }
    }).then((response)=>{
     console.log(response)
    }).catch((e)=>{
      console.log(e)
}) //sending data to the server by axios
}






  function changeColor(e){
    e.target.style.background = 'lightgrey';
  }

  function backcolor(e){
    e.target.style.background = 'white';
  }

  function setSuggest(){
    setlocation(placeName)
    setvisibleLocation(false)
    setvisible(true)
  }
  
    return (
        <div className="animate__animated animate__fadeInLeft">
        <div className="login">
            <div className="container" >
             <h1 style={{textAlign:"center",fontSize:"30px",marginTop:"15%"}}>Please Enter your Location</h1>
             <FontAwesomeIcon  icon={faUser} style={{position:"absolute",top:"25%",left:"36%",fontSize:"20px"}}/> <input className="username_first" value={props.name} readOnly></input>
             <FontAwesomeIcon  icon={faMapMarkerAlt} style={{position:"absolute",top:"36.6%",left:"36%",fontSize:"20px"}}/>
              <input className="username"  value={location} name="location"  onChange={settinglocation} placeholder="Location"></input>
              {visibleLocation?<div className="container_suggest">
            <ul>
            <li className="suggestion" onMouseOver={changeColor} onMouseLeave={backcolor} onClick={setSuggest}>{placeName}</li>
            </ul>
              </div>:null}
            <button className="loginbtn" onClick={storingPlace}>Submit</button>
            {visible?<Alert top="70px" error="Location is not defined!"></Alert>:null}

            </div>
         
        </div>
             </div>

    )
}

export default Popup