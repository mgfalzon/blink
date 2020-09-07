import React, {useState, useEffect, useRef} from 'react'
import {Container, Row, Col, Image, Button} from 'react-bootstrap'

import FaqTable from '../Components/FaqTable'


const FAQ = () => {

        // Scroll Reminder
        const [scrollReminder, setScrollReminder] = useState({})
        useEffect(() => {
            window.addEventListener('scroll', handleScroll)
            return window.addEventListener('scroll', handleScroll)
        }, [])
        const handleScroll = () => {
            setScrollReminder({
                opacity: window.pageYOffset === 0 ? 1 : 0
            })
        }

        return(
            <div>
               <Image fluid className='pt-5 mb-5' src={require("./faq.png")} style={{height: 'auto', width: '50%', display: 'block' ,marginLeft: 'auto', marginRight: 'auto'}} /> 
               <FaqTable />
            </div>
        )
}

export default FAQ