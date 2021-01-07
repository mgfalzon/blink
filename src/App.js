import React from 'react';
import { BrowserView, MobileView } from 'react-device-detect';

import DesktopApp from './Desktop/DesktopApp'
import MobileApp from './Mobile/MobileApp'
import './global.css'

const App = () => <>
    <BrowserView>
      <DesktopApp />
    </BrowserView>
    <MobileView>
      <MobileApp />
    </MobileView>
</>

export default App;