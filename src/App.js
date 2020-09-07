import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {BrowserView, MobileView} from 'react-device-detect'


import './Style.css'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import FAQ from './Pages/FAQ'
import Footer from './Components/Footer'

const App = () => (
   <>
    <BrowserView>
        <Router>
            <Navbar />
            <Switch>
              <Route component={FAQ} path='/faq' />
              <Route component={Home} path='/' />
            </Switch>
         </Router>
      <Footer />
    </BrowserView>
    </>
)



export default App;