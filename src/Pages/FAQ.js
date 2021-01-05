import React from 'react'
import {Container, Row, Col, Image} from 'react-bootstrap'
import {FaClock, FaComment, FaDollarSign} from 'react-icons/fa'

import '../Styles/Pages/faq.css'

const Question = ({icon, question, answer}) => (
    <Row className="question mt-5 mx-5 py-5 align-items-center">
        <Col className='icon-col' md={2}>
            <div className='circle mt-3'>{React.createElement(icon)}</div>
        </Col>
        <Col md={7}>   
            <h5 className='font-weight-bold'>{question}</h5>   
            <p className="mb-0">{answer}</p>
        </Col>
    </Row>
)

const FAQ = () => (
    <>
        <Image fluid className='d-block w-50 mx-auto py-5' src={require("../Assets/faq.png")} /> 
        <Container fluid>
                <Question icon={FaClock}
                    question="How long should a Blink be?"
                    answer="A Blink should be 20-30 seconds long. You do not want to 
                            overwhelm the hiring manager but you also want to properly 
                            introduce yourself!"
                />
                <Question icon={FaComment}
                    question="What Should I Talk About?"
                    answer="Talk about why you are interested, how you would suit the work 
                            environment, and maybe even crack a joke! Remember, you want to 
                            convey parts about your character you can't in a resume."
                />
                <Question icon={FaDollarSign}
                    question="Is a Blink Resume Free to Make?"
                    answer="Yup! During our early stages, we will keep the application
                            completely, positively, 100% free for use."
                />
        </Container>
    </>
)

export default FAQ