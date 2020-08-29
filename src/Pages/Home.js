import React, {useState, useEffect} from 'react'
import {Container, Row, Col, Image, Button} from 'react-bootstrap'
import {FaArrowCircleDown, FaCamera, FaPalette, FaShareSquare} from 'react-icons/fa'

const Home = () => {
    const [scrollReminder, setScrollReminder] = useState({})
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return window.addEventListener('scroll', handleScroll)
    }, [])
    const handleScroll = () => {
        window.pageYOffset === 0 ? 
            setScrollReminder({opacity: 1}) : setScrollReminder({opacity: 0})
    }
    return (
        <Container fluid>
            <Row md={2} sm={1} className='pt-5 px-5' style={{minHeight: '90vh', maxHeight: '90vh'}}>
                <Col className='pl-5' md={5}>
                    <p className='pt-5  display-4 font-weight-bold'>Blink Resume</p>
                    <p>
                        Combine a video introduction with your text resume to create
                        the most powerful impression on potential empolyers.
                    </p>
                    <div className='d-flex'>
                        <Button size='lg' className='red-btn mt-5'>Get started</Button>
                        <div className='mx-3'/>
                        <Button size='lg' className='grey-btn mt-5'>Learn more</Button>
                    </div>
                    <div className='d-flex align-items-center h-50' style={{...scrollReminder, transition: 'all 1s'}}>
                        <FaArrowCircleDown className='arrow' />
                        <span className='ml-2'>Scroll Down</span>
                    </div>
                </Col>
                <Col md={7}>
                    <Image fluid className='pt-5' src={require('../Assets/bg4.png')}  />
                </Col>
            </Row>
            <Row>
                <Image fluid src={require('../Assets/waveTop2.png')}  
                    style={{objectFit: 'cover'}} 
                />
            </Row>
            <Row className='py-4 d-flex flex-fill' style={{backgroundColor: '#dde8fc'}}>
                <Col className='icon-col'>
                    <div className='circle'><FaCamera /></div>
                        <h5 className='my-3 font-weight-bold'>Record</h5>
                        <p className='px-5' style={{fontSize: 18}}>
                            Use your device to record a short video introduction
                        </p>
                </Col>
                <Col className='icon-col'>
                    <div className='circle'><FaPalette /></div>
                    <h5 className='my-3 font-weight-bold'>Create</h5>
                    <p className='px-5' style={{fontSize: 18}}>
                        Combine your video introduction with your resume to create a Blink
                    </p>
                </Col>
                <Col className='icon-col'>
                    <div className='circle'><FaShareSquare /></div>
                    <h5 className='my-3 font-weight-bold'>Send</h5>
                    <p className='px-5' style={{fontSize: 18}}>
                        Send your Blink Resume to hiring managers 
                    </p>
                </Col>
            </Row>
            <Row>
                <Image fluid className='w-100' src={require('../Assets/waveBottom.png')}  
                    style={{objectFit: 'cover'}} 
                />
            </Row>
            <Row md={2} sm={1} className='px-5'>
                <Col className='pl-5 my-auto' md={5}>
                    <h3 className='pt-5 font-weight-bold'>Upload Your Resume</h3>
                    <p>
                        The Blink Resume API connects a user's resume with their
                        short video introduction
                    </p>
                    <Button size='lg' className='grey-btn mt-4'>Upload Resume</Button>
                </Col>
                <Col md={7}>
                    <Image fluid className='pt-5' src={require('../Assets/resume.png')}  />
                </Col>
            </Row>
            <Row md={2} sm={1} className='px-5 pb-3'>
                <Col md={7}>
                    <Image fluid className='pt-5' src={require('../Assets/record.png')}  />
                </Col>
                <Col className='pl-5 my-auto' md={5}>
                    <h3 className='pt-5 font-weight-bold'>Add a Video Introduction</h3>
                    <p>
                        Using your device's camera, record a short
                        video introduction. Be professional,
                        charismatic, and passionate to capture the
                        attention of hiring managers.
                    </p>
                    <div className='d-flex'>
                        <Button size='lg' className='red-btn mt-4'>Record</Button>
                        <div className='mx-3'/>
                        <Button size='lg' className='grey-btn mt-4'>Upload</Button>
                    </div>
                </Col>
            </Row>
            <Row md={2} sm={1} className='px-5 pt-5'>
                <Col className='pl-5 my-auto' md={5}>
                    <h3 className='pt-5 font-weight-bold'>Share Your Blink Resume</h3>
                    <p>
                        Send your Blink Resume to hiring managers
                        feeling confident that you put your best foot
                        forward and will stand out from the
                        competition. 
                    </p>
                    <div className='d-flex'>
                        <Button size='lg' className='red-btn mt-4'>Share</Button>
                    </div>
                </Col>
                <Col md={7}>
                    <Image fluid className='pt-5' src={require('../Assets/send.png')}  />
                </Col>
            </Row>
        </Container>
    )
}

export default Home