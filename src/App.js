import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import './Style.css'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'

const App = () => (
    <Router>
      <Navbar />
      <Switch>
         <Route path='/' exact component={Home}/>
      </Switch>
    </Router>
)

export default App;