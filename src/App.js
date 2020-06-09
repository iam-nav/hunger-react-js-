
import React from 'react'
import  {BrowserRouter as Router,Route,Switch, useLocation} from 'react-router-dom'
import {
    TransitionGroup,
    CSSTransition
  } from "react-transition-group";
import './components/layouts/home.css'
import Home from './components/layouts/home'
import Register from './components/Register/newUser'
import Login from './components/Register/login'


const App= ()=>(
    <div>
      
<Router>
    <Route render={({location})=>(<TransitionGroup>
<CSSTransition key={location.key}
    timeout={600}
    classNames="item"
>
<Switch location={location}>
    <Route path="/" exact component={Home} />
    <Route path="/login" component={Login} />
    <Route path="/register" component={Register}/>
    {/* <Route path="/join" component={joinRoom}/> */} */}
</Switch>
</CSSTransition>
</TransitionGroup>)}></Route>
    

</Router>

</div>
);

export default App;