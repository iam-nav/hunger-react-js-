import React, { Component } from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMapMarkerAlt,faUser,faEdit} from '@fortawesome/free-solid-svg-icons'
import  './home.css'
export class homePage extends Component { 
constructor(props) {
  super(props)

  this.state = {
    editLocation:false,
    location:''
  }
}

editLocation=()=>{
  this.setState({
   editLocation:true 
  })
}

handle_data=(event)=>{
  this.setState({
      location:event.target.value
  })
}

store_location = (e)=>{
  if (e.key === 'Enter') {
    this.setState({
     location:this.state.location,
     editLocation:false
    })
  }
}


  render(){
      const style = {
        width: '70%',
        height: '50%',
      }
    return (
            <div>
              <h1 style={{fontSize:"50px",textAlign:"center",color:"#AC3B61"}}>H U N G U R</h1>
              <p style={{textAlign:"center",marginTop:"-30px",color:"#D57A99"}}>Finding Free Food Around you</p>
              <div style={{marginLeft:"18%"}}>
              <h4><FontAwesomeIcon  icon={faUser} style={{fontSize:"18px",paddingRight:"10px"}}></FontAwesomeIcon>Navjot singh</h4>
              <span><FontAwesomeIcon  icon={faMapMarkerAlt} style={{fontSize:"20px",paddingRight:"10px"}}>
              </FontAwesomeIcon>{this.state.editLocation?<input value={this.state.location} onChange={this.handle_data}  onKeyPress={this.store_location}  className="inp_Location"></input>:<input placeholder={this.state.location} name="location" className="message" readOnly></input>}
                <FontAwesomeIcon  icon={faEdit} style={{fontSize:"18px",paddingLeft:"10px",cursor:"pointer"}} onClick={this.editLocation} ></FontAwesomeIcon></span>
            </div>
<div style={{marginLeft:"18%",marginTop:"15px"}}>
  <Map google={this.props.google} zoom={1}
  style={style}
         initialCenter={{
          lat: 20.5937,
          lng: 78.9629
        }}
         >
 <Marker
 onClick={this.onMarkerClick}
 name={'Current location'}
  title="Location"
  id={1}
  position={{lat: 37.762391, lng: -122.439192}}
  ></Marker>
  <Marker
  title="Location"
  id={1}
  position={{lat: 31.3260, lng: 75.5762}}
  ></Marker>

 <InfoWindow onClose={this.onInfoWindowClose}>
     <div>
       <h1>jal</h1>
       
     </div>
 </InfoWindow>
</Map>
</div>
          </div>
        )
    }
}


export default GoogleApiWrapper({
  apiKey: ("AIzaSyBCH4PPdaT1Gt1fjcCFhrDV16j-mDcYm5k")
})(homePage)