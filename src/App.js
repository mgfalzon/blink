import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {BrowserView, MobileView} from 'react-device-detect'

import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import FAQ from './Pages/FAQ'
import Footer from './Components/Footer'

const App = () => (
    <BrowserView>
        <Router>
            <Navbar />
            <Switch>
              <Route exact component={Home} path='/' />
              <Route component={FAQ} path='/faq' />
            </Switch>
         </Router>
      <Footer />
    </BrowserView>
)

export default App;