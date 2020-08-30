import React, {useState, useEffect, useRef} from 'react'
import {Container, Row, Col, Image, Button} from 'react-bootstrap'
import {FaArrowCircleDown, FaFileAlt, FaFileVideo} from 'react-icons/fa'
import Link from 'react-anchor-link-smooth-scroll'

import IconRow from '../Components/IconRow'

const Section = props => {
    const Img = (
        <Col md={7}>
            <Image fluid className='pt-5' src={props.src}  />
        </Col>
    )
    const header = props.header && 'display-4'
    return (
        <Row md={2} sm={1} id={props.id} className={`px-5 ${props.className}`} style={props.style}>
            {props.reverse && Img}
            <Col className={`pl-5 ${!header && 'my-auto'}`} md={5}>
                <h3 className={`pt-5 font-weight-bold ${header}`}>{props.title}</h3>
                <p>{props.desc}</p>
                {props.children}
            </Col>
            {!props.reverse && Img}
        </Row>
    )
}

// params: icon, size(boolean), accept, props.children(button) 
const FileInput = props => {
    const [show, setShow] = useState(0)
    const [name, setName] = useState('')
    const [size, setSize] = useState('')
    const ref = useRef()
    const upload = () => {ref.current.click()}
    const handleUpload = event => {
        setShow(1)
        const file = event.target.files[0]
        if (file) {
            setName(() =>
                file.name.length > 25 ?
                    `${file.name.substring(0, 25)}...`
                    : file.name
            )
            setSize(`${(file.size * .001).toFixed(2)} KB`)
        }
        /*
            pass a function as props here for an API call
            eg. props.handleUpload(file)
        */
    }
    
    return (
        <>
            {React.cloneElement(props.children, {onClick: upload})}
            <div className='d-flex align-items-center mt-5 rounded p-3'
                style={{border: '2px solid #d5e1f8', width: '90%', opacity: show, transition: 'all .8s'}}
            >
                {React.createElement(props.icon, {className: 'mr-3', size: 25, style: {color: '#9ca5b6'}})}
                <span>{name}</span>
                {props.size &&
                    <span className='flex-grow-1 d-flex justify-content-end'>{size}</span>
                }
                <input type="file" accept={props.accept} ref={ref} onChange={handleUpload} className='d-none' />
            </div>
        </>
    )
}


const Home = () => {

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

    // videoUpload Ref (work around for making FileInput more flexible)
    const videoUpload = useRef()

    return (
        <Container fluid>
            <Section title='Blink Resume' header
                src={require('../Assets/bg4.png')}
                desc="Combine a video introduction with your text resume to create
                the most powerful impression on potential empolyers."
                style={{minHeight: '90vh', maxHeight: '90vh'}}
                className='pt-5'
            >
                <div className='d-flex'>
                    <Link href='#resume' offset='75'>
                        <Button size='lg' className='red-btn mt-5'>Get started</Button>
                    </Link>
                    <div className='mx-3'/>
                    <Button href='/about' size='lg' className='grey-btn mt-5'>Learn more</Button>
                </div>
                <div className='d-flex align-items-center h-50' style={{...scrollReminder, transition: 'all 1s'}}>
                    <FaArrowCircleDown className='arrow' />
                    <span className='ml-2'>Scroll Down</span>
                </div>
            </Section>
            <IconRow />
            <Section title='Upload Your Resume' id='resume'
                src={require('../Assets/resume.png')}
                desc="The Blink Resume API connects a user's resume with their
                short video introduction"
            >
                <FileInput icon={FaFileAlt} size>
                    <Button size='lg' className='grey-btn mt-4'>Upload Resume</Button>
                </FileInput>
            </Section>
            <Section title='Add a Video Introduction' reverse 
                src={require('../Assets/record.png')}
                desc="Using your device's camera, record a short video introduction. 
                Be professional, charismatic, and passionate to capture the 
                attention of hiring managers."
                className='pb-3'
            >
                <div className='d-flex'>
                    <Button size='lg' className='red-btn mt-4'>Record</Button>
                    <div className='mx-3'/>
                    <Button size='lg' className='grey-btn mt-4' onClick={() => videoUpload.current.click()}>Upload</Button>
                </div>
                <FileInput icon={FaFileVideo} accept='video/*'>
                    <input className='d-none' ref={videoUpload} />
                </FileInput>
            </Section>
            <Section title='Share Your Blink Resume' 
                src={require('../Assets/send.png')}
                desc="Send your Blink Resume to hiring managers feeling
                confident that you put your best foot forward and will 
                stand out from the competition."
                className='pt-5'
            >
                <Button size='lg' className='red-btn mt-4'>Share</Button>
            </Section>
        </Container>
    )
}

export default Home