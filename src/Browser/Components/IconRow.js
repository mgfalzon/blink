import React from 'react'
import { Row, Col, Image } from 'react-bootstrap'
import { FaCamera, FaPalette, FaShareSquare } from 'react-icons/fa'

import '../Styles/Components/icon-row.css'

const IconCol = ({icon, name, desc}) => (
    <Col className='icon-col'>
        <div className='circle'>{React.createElement(icon)}</div>
        <h5 className='my-3 font-weight-bold'>{name}</h5>
        <p className='px-5'>{desc}</p>
    </Col>
)

const IconRow = () => <>
    <Row>
        <Image fluid src={require('../../Assets/waveTop2.png')}  />
    </Row>
    <Row className='d-flex flex-fill py-4 bg-baby-blue'>
        <IconCol icon={FaCamera} name='Record'
            desc='Use your device to record a short video introduction'
        />
        <IconCol icon={FaPalette} name='Create'
            desc='Combine your video introduction with your resume to create a Blink'
        />
        <IconCol icon={FaShareSquare} name='Send'
            desc='Send your Blink Resume to hiring managers'
        />
    </Row>
    <Row>
        <Image fluid src={require('../../Assets/waveBottom.png')} />
    </Row>
</>


export default IconRow