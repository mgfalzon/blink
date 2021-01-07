import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Vision from './Pages/Vision';
import FAQ from './Pages/FAQ';

import './browser.css'

const BrowserApp = () => 
<div className='browser'>
    <Router>
        <Navbar />
        <Switch>
        <Route exact component={Home} path='/' />
        <Route component={FAQ} path='/faq' />
        <Route component={Vision} path='/about' />
        </Switch>
    </Router>
    <Footer />
</div>

export default BrowserApp;