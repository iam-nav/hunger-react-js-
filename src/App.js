
import React from 'react'
import  {BrowserRouter as Router,Route} from 'react-router-dom'

import Home from './components/layouts/home'
const App= ()=>(
    <div>
<Router>
    <Route path="/" exact component={Home} />
    {/* <Route path="/chat" component={cards} />
    <Route path="/create" component={create}/>
    <Route path="/join" component={joinRoom}/> */}
</Router>
</div>
);

export default App;