import React from 'react'
import { Container, Tab, Row, Col, Nav, Button, Image } from 'react-bootstrap'

import { home as data } from '../../data'
import '../Styles/Pages/home.css'
import { resume, record, send } from '../../Assets'

const Home = () => (
    <Container className='p-1' fluid>
        <div className='px-4 pt-4 pb-2'>
            <h2 className='font-weight-bold'>Blink Resume</h2>
            <p>Digitize your resume</p>
        </div>
        <Tab.Container defaultActiveKey="resume">
            <Col className='d-flex flex-column align-items-center'>
            <Row>
                <Nav variant="pills" className='justify-content-around'>
                    <Nav.Item>
                        <Nav.Link eventKey="resume">Resume</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="video">Video</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="share">Share</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Row>
            <Row>
                <Tab.Content>
                <Tab.Pane eventKey="resume">
                    <h5 className='font-weight-bold'>{data[0].title}</h5>
                    <p className='small'>{data[0].desc}</p>
                    <Image fluid src={resume} />
                    <div className='d-flex justify-content-center mt-3'>
                        <Button className='blue'>Upload Resume</Button>
                    </div>
                </Tab.Pane>
                <Tab.Pane eventKey="video">
                    <h5 className='font-weight-bold'>{data[1].title}</h5>
                    <p className='small'>{data[1].desc}</p>
                    <Image fluid src={record} />
                    <div className='d-flex justify-content-center mt-4'>
                        <Button className='blue'>Upload Video</Button>
                    </div>
                </Tab.Pane>
                <Tab.Pane eventKey="share">
                    <h5 className='font-weight-bold'>{data[2].title}</h5>
                    <p className='small'>{data[2].desc}</p>
                    <Image fluid src={send} />
                    <div className='d-flex justify-content-center mt-5'>
                        <Button className='blue'>Share</Button>
                    </div>
                </Tab.Pane>
            </Tab.Content>
        </Row>
        </Col>
    </Tab.Container>
</Container>
)

export default Home