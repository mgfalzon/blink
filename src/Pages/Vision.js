import React, {useState, useEffect} from 'react'
import {GiBullseye } from 'react-icons/gi'
import {ImEye } from 'react-icons/im'
import {FaPeopleCarry} from 'react-icons/fa'
import {Button} from 'react-bootstrap'

const Vision = () => {


    return(
        <div>
        
            <h3 style ={{textAlign: 'center', fontSize: '250%', marginTop: "1%", marginRight: "25%", marginLeft: "25%"}}className='pt-5 font-weight-bold'>
                Blink Resume is <span style={{color: "#6495ed"}}>redefining</span> the hiring process
            </h3>
            <div style={{display:"flex", marginLeft: "5%", marginRight: "5%"}}>
            <div style = {{float:'left', width: '25%', marginLeft: "82px"}}>  
            <GiBullseye size={64} />
            <h3>1.</h3>
            <h4 style={{fontStyle: "italic"}}>Mission</h4>
            <p> 
                Here at Blink Resume we plan on revolutionizing the job candidate review
                process. The days of plain, paper resumes are long gone with Blink Resume.
                We definitely are not settling for less, so why should you?
            </p>
            </div>
            
            <div style = {{float:'left', width: '25%', marginLeft: "82px"}}>
            <h3>2.</h3>
            <h4 style={{fontStyle: "italic"}}>Vision</h4>
            <p>
                Our team envisions a job hiring future where humans are placed first. One in which 
                your character, personality, and disposition are all shown before an interview even
                takes place. Join our vision in the Blink of an eye.
            </p>
            <ImEye size={64}/>
            </div>
            
            <div style = {{float:'left', width: '25%', marginLeft: "82px"}}>
            <FaPeopleCarry size={64}/>
            <h3>3.</h3>
            <h4 style={{fontStyle: "italic"}}>Values</h4>
            <p>
                We base our values off of what works best for the candidate. We have had years of 
                combined experience in the corporate hiring industry and are incorporating these best
                practices into Blink Resume.
            </p>
            </div>
            </div>
            <div style={{display:"flex",justifyContent:"center", alignItems:"center"}} >
            
                        <Button href="./Home" size='lg' className='red-btn mt-5'>Get started</Button>
            
            </div>
        </div>
    )
}

export default Vision
