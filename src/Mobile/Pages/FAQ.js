import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'

import { faq as data } from '../../data'
import { faq } from '../../Assets'

const Question = ({icon, question, answer}) => (
    <Row className="question mt-5 mx-5 py-4 align-items-center">
        <Col className='icon-col' md={2}>
            <div className='circle'>{React.createElement(icon)}</div>
        </Col>
        <Col md={7}>   
            <h5 className='font-weight-bold'>{question}</h5>   
            <p className="mb-0">{answer}</p>
        </Col>
    </Row>
)

const FAQ = () => (
    <>
        <Image fluid src={faq} /> 
        <Container fluid>
            {data.map(({icon, question, answer}) => <Question icon={icon} question={question} answer={answer} />)}
        </Container>
    </>
)

export default FAQ