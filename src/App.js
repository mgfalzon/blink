import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {BrowserView, MobileView} from 'react-device-detect'


import './Style.css'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Footer from './Components/Footer'

const App = () => (
   <>
    <BrowserView>
        <Router>
            <Navbar />
            <Switch>
              <Route path='/' exact component={Home}/>
            </Switch>
         </Router>
      <Footer />
    </BrowserView>
    </>
)



export default App;