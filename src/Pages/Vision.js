import React from 'react'
import { Button } from 'react-bootstrap'
import { GiBullseye } from 'react-icons/gi'
import { ImEye } from 'react-icons/im'
import { FaPeopleCarry } from 'react-icons/fa'

import '../Styles/Pages/vision.css'

const Vision = () => (
    <div className='px-3'>
        <h1 className='display-4 text-center font-weight-bold p-5'>
            Blink Resume is <span className='blue'>redefining</span> the hiring process
        </h1>
        <div className='d-flex flex-fill px-3'>
            <div className='px-2'>  
                <GiBullseye />
                <h3>1.</h3>
                <h4>Mission</h4>
                <p> 
                    Here at Blink Resume we plan on revolutionizing the job candidate review
                    process. The days of plain, paper resumes are long gone with Blink Resume.
                    We definitely are not settling for less, so why should you?
                </p>
            </div>
        
            <div className='px-2'>
                <h3>2.</h3>
                <h4>Vision</h4>
                <p>
                    Our team envisions a job hiring future where humans are placed first. One in which 
                    your character, personality, and disposition are all shown before an interview even
                    takes place. Join our vision in the Blink of an eye.
                </p>
                <ImEye />
            </div>
        
            <div className='px-2'>
                <FaPeopleCarry />
                <h3>3.</h3>
                <h4>Values</h4>
                <p>
                    We base our values off of what works best for the candidate. We have had years of 
                    combined experience in the corporate hiring industry and are incorporating these best
                    practices into Blink Resume.
                </p>
            </div>
        </div>
        <div className='d-flex justify-content-center align-items-center'>
            <Button href="./Home" size='lg' className='red mt-5'>Get started</Button>
        </div>
    </div>
)

export default Vision
