import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Vision from './Pages/Vision';
import FAQ from './Pages/FAQ';

import './desktop.css'

const DesktopApp = () => 
<div className='dekstop'>
    <Router basename='/blink'>
        <Navbar />
        <Switch>
        <Route exact component={Home} path='/' />
        <Route component={FAQ} path='/faq' />
        <Route component={Vision} path='/about' />
        </Switch>
    </Router>
    <Footer />
</div>

export default DesktopApp;