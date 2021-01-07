import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'

import { faq as data } from '../../data'
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
        <Image fluid className='d-block w-50 mx-auto py-5' src={require("../../Assets/faq.png")} /> 
        <Container fluid>
            {data.map(({icon, question, answer}) => <Question icon={icon} question={question} answer={answer} />)}
        </Container>
    </>
)

export default FAQ