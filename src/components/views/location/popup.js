import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import geocode from './geocode/geocode'
import 'animate.css'
import './popup.css'

 const Popup=(props)=> {
    const [location,setlocation] = useState('')
    const [placeName,setplaceName]= useState([])
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
    })
}
}


    
function getLocation() {
 
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
  }
  
    return (
        <div className="animate__animated animate__fadeInLeft">
        <div className="login">
            <div className="container" >
             <h1 style={{textAlign:"center",fontSize:"30px",marginTop:"15%"}}>Please Enter your Location</h1>
             <FontAwesomeIcon  icon={faUser} style={{position:"absolute",top:"25%",left:"36%",fontSize:"20px"}}/> <input className="username_first" value={props.name} readOnly></input>
             <FontAwesomeIcon  icon={faMapMarkerAlt} style={{position:"absolute",top:"36.6%",left:"36%",fontSize:"20px"}}/>
              <input className="username" onClick={getLocation} value={location} name="location"  onChange={settinglocation} placeholder="Location"></input>
              
              {visibleLocation?<div className="container_suggest">
            <ul>
            <li className="suggestion" onMouseOver={changeColor} onMouseLeave={backcolor} onClick={setSuggest}>{placeName}</li>
            </ul>
              </div>:null}
            <button className="loginbtn">Submit</button>
            </div>
        </div>
        </div>

    )
}

export default Popup