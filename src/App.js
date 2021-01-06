import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {BrowserView, MobileView} from 'react-device-detect'

import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import FAQ from './Pages/FAQ'
import Vision from './Pages/Vision'

const App = () => (
    <BrowserView>
        <Router>
            <Navbar />
            <Switch>
              <Route exact component={Home} path='/' />
              <Route component={FAQ} path='/faq' />
              <Route component={Vision} path='/about' />
            </Switch>
         </Router>
      <Footer />
    </BrowserView>
)

export default App;