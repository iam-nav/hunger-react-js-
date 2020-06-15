
import React,{useState,useEffect} from 'react'
import  {BrowserRouter as Router,Route,Switch, useLocation} from 'react-router-dom'
import {
    TransitionGroup,
    CSSTransition
  } from "react-transition-group";
import './components/layouts/home.css'
import Home from './components/layouts/home'
import Register from './components/Register/newUser'
import Login from './components/Register/login'
import HomePage from './components/views/homePage'
import axios from 'axios'
import Cookies from 'js-cookie'
import Popup from './components/views/location/popup'
import Check from './components/views/googleMap/check'


const App= ()=>{  
    const [visible, setvisible] = useState(true);
    const [name,setname]=useState('');

    useEffect(() => {
    checkUserLoged()
    },[]);

    
const checkUserLoged=()=>{
    const token = Cookies.get('user')
    axios.defaults.headers.common['Authorization'] = `Bearer${token}`
    const url ="http://localhost:8080/users/me"
    axios.get(url)
    .then((result)=>{
        setname(result.data.name)
        setvisible(false)
    })
  .catch((error=>setvisible(true)))
}



    return( 
     <div>   
<Router>
    <Route render={({location})=>(<TransitionGroup>
<CSSTransition key={location.key}
    timeout={600}
    classNames="item"
>
<Switch location={location}>
    <Route path="/" exact component={()=>visible?<Home />:<Popup name={name} />} /> 
    {/* <Route path="/" exact component={visible?Home:Popup} />  */}
    <Route path="/login" component={Login} />
    <Route path="/register" component={Register}/>
    <Route path="/home" component={Check}/>
</Switch>
</CSSTransition>
</TransitionGroup>)}></Route>
    

</Router>

</div>
    )
};

export default App;