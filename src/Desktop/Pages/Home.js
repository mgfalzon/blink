import React, { useState, useEffect, useRef } from 'react'
import { Container, Row, Col, Image, Button } from 'react-bootstrap'
import { FaArrowCircleDown, FaFileAlt, FaFileVideo } from 'react-icons/fa'
import Link from 'react-anchor-link-smooth-scroll'

import IconRow from '../Components/IconRow'
import { home as data } from '../../data'
import '../Styles/Pages/home.css'

// params: src, id, title, desc, children, reverse(boolean)
const Section = props => {
    const Img = (
        <Col md={7}>
            <Image fluid className='pt-5' src={props.src} />
        </Col>
    )
    return (
        <Row md={2} sm={1} id={props.id} className={`px-5 ${props.className}`}>
            {props.reverse && Img}
            <Col className='pl-5 my-auto' md={5}>
                <h3 className='pt-5 font-weight-bold'>{props.title}</h3>
                <p>{props.desc}</p>
                {props.children}
            </Col>
            {!props.reverse && Img}
        </Row>
    )
}

// params: icon, size(boolean), accept, child(button) 
const FileInput = props => {
    const [show, setShow] = useState('')
    const [name, setName] = useState('')
    const [size, setSize] = useState('')
    const ref = useRef()
    const upload = () => {ref.current.click()}
    const handleUpload = event => {
        setShow('show')
        const file = event.target.files[0]
        if (file) {
            setName(file.name.length > 25 ?
                file.name.substring(0, 25) + '...' : file.name
            )
            setSize((file.size * .001).toFixed(2) + ' KB')
        }
        /*
            pass a function as props here for an API call
            eg. props.handleUpload(file)
        */
    }
    
    return <>
        {React.cloneElement(props.children, {onClick: upload})}
        <div className={`d-flex align-items-center mt-5 p-3 rounded io-border ${show}`}>
            {[
                React.createElement(props.icon, {className: 'file-icon mr-3'}), name,
                props.size && <span className='d-flex flex-grow-1 justify-content-end'>{size}</span>
            ]}
            <input type="file" accept={props.accept} ref={ref} onChange={handleUpload} className='d-none' />
        </div>
    </>
}

const Home = () => {

    // Scroll Reminder
    const [scrollReminder, setScrollReminder] = useState({})
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return window.addEventListener('scroll', handleScroll)
    }, [])
    const handleScroll = () => {
        setScrollReminder({opacity: window.pageYOffset === 0 ? 1 : 0})
    }

    // videoUpload Ref (work around for making FileInput more flexible)
    const videoUpload = useRef()

    return (
        <Container fluid>
            <Section title='Blink Resume'
                src={require('../../Assets/bg.png')}
                desc="Combine a video introduction with your text resume to create
                the most powerful impression on potential empolyers."
                className='main-header pt-5'
            >
                <div className='d-flex'>
                    <Link href='#resume' offset='75'>
                        <Button size='lg' className='red mt-5'>Get started</Button>
                    </Link>
                    <div className='mx-3'/>
                    <Button href='/about' size='lg' className='mt-5'>Learn more</Button>
                </div>
                <div className='d-flex align-items-center h-50' style={{...scrollReminder, transition: 'all 1s'}}>
                    <FaArrowCircleDown className='arrow' />
                    <span className='ml-2'>Scroll Down</span>
                </div>
            </Section>

            <IconRow />

            <Section title={data[0].title} id='resume'
                src={require('../../Assets/resume.png')}
                desc={data[0].desc}
            >
                <FileInput icon={FaFileAlt} size>
                    <Button size='lg' className='mt-4'>Upload Resume</Button>
                </FileInput>
            </Section>

            <Section title={data[1].title} reverse 
                src={require('../../Assets/record.png')}
                desc={data[1].desc}
                className='pb-3'
            >
                <div className='d-flex'>
                    <Button size='lg' className='red mt-4'>Record</Button>
                    <div className='mx-3'/>
                    <Button size='lg' className='mt-4' onClick={() => videoUpload.current.click()}>Upload</Button>
                </div>
                <FileInput icon={FaFileVideo} accept='video/*'>
                    <input className='d-none' ref={videoUpload} />
                </FileInput>
            </Section>

            <Section title={data[2].title}
                src={require('../../Assets/send.png')}
                desc={data[2].desc}
                className='pt-5'
            >
                <Button size='lg' className='red mt-4'
                    href='mailto:?subject=My BlinkResume is Attached&body= Follow this URL to view my BlinkResume: '
                >Share</Button>
            </Section>

        </Container>
    )
}

export default Home