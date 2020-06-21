import React,{ useState, useEffect } from 'react'
import MapGL, {GeolocateControl ,Marker } from 'react-map-gl'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarker } from '@fortawesome/free-solid-svg-icons'
import Cookies from 'js-cookie'
import Popup from '../location/popup'
import 'mapbox-gl/dist/mapbox-gl.css'
import axios from 'axios'


const TOKEN='pk.eyJ1IjoiaWFtbmF2IiwiYSI6ImNrOWJhYjZlZjBtaHozbnMybmgyMTZkYmcifQ.d-BSNdaomSkFKgYgh7llYg'

const geolocateStyle = {
  float: 'left',
  margin: '50px',
  padding: '10px'
};


export default function Map(props){
  useEffect(() => {
   AxiosPost()
  },[]);

    const [popupVisible,setpopupVisible]=useState(false)
    const [location,setlocation]=useState([{long:76.680000,lat:12.120000},{long:74.629997,lat:24.879999},{long:73.300003,lat:16.994444}])
    const [viewport, setViewPort ] = useState({    
    width: "100%",
    height: 900,
    latitude: 31.3260,
    longitude:  75.5762,
    zoom: 2
  })  //states 

  const AxiosPost=()=>{ 
    const token = Cookies.get('user')
    axios.defaults.headers.common['Authorization'] = `Bearer${token}`
    axios({
        method: 'get',
        url: 'http://localhost:8080/findlocation',
      }).then((response)=>{
       console.log(response.data)
      }).catch((e)=>{
        setpopupVisible(true)
  }) //sending data to the server by axios
  }


  const _onViewportChange = viewport => setViewPort({...viewport, })
  
  return (
    popupVisible?<Popup name={props.name}></Popup>:
    <div style={{ margin: '0 auto'}}>
      <MapGL
        {...viewport}
        mapboxApiAccessToken={TOKEN}
        mapStyle="mapbox://styles/mapbox/streets-v8"
        onViewportChange={_onViewportChange}
      >
{location.map((result,index)=>{
 return<Marker
  longitude={result.long} 
  latitude={result.lat} 
  key={index}
  >
 <FontAwesomeIcon  icon={faMapMarker} color="red" size="2x" aria-hidden="true"></FontAwesomeIcon>
 </Marker>
})
}

        <GeolocateControl
          style={geolocateStyle}
          positionOptions={{enableHighAccuracy: true}}
          trackUserLocation={true}
        />
      </MapGL>
    </div>
  )
}

