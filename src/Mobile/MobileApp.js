import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Menubar from './Components/Menubar'
import Home from './Pages/Home'
import FAQ from './Pages/FAQ'


import './mobile.css'

const MobileApp = () => 
<div className='mobile'>
    <Router basename='/blink'>
        <Switch>
            <Route exact component={Home} path='/' />
            <Route exact component={FAQ} path='/faq' />
        </Switch>
        <Menubar />
    </Router>
</div>

export default MobileApp;