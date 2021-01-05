import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import './global.css'
import { Button } from 'react-bootstrap'

/*
const Recorder = () => {
    let recording = document.getElementById("recording")
    ref = useRef()
    console.log(recording)
    return (
    <div className='d-flex'>
        <Button id="stop"> Stop</Button>
        <video id="recording" width="160" height="120" controls></video>
        <Button id="download">Download</Button>
    </div>
    )
}
*/

ReactDOM.render(<App />, document.getElementById('root'))

serviceWorker.unregister();
