import React, {useState, useEffect} from 'react'
import {Navbar, Nav, Image, Button} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'

const MyNavbar = () => {
    const [shadow, setShadow] = useState()

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return window.addEventListener('scroll', handleScroll)
    }, [])
    const handleScroll = () => {
        window.pageXOffset === 0 ? 
            setShadow('') : setShadow('shadow-sm')
    }

    const Link = props => (
        <NavLink {...props} 
            className='nav-link mx-1' 
            activeClassName='nav-link-active'
        >{props.children}</NavLink>
    ) 

    return (
        <Navbar className={'w-100 py-3 ' + shadow} style={{paddingRight: '6em', paddingLeft: '6em'}}>
            <div>
                <Image className='mr-3' src={require('../Assets/logo.png')} width={45} height={45} />
                <Navbar.Brand>Blink Resume</Navbar.Brand>
            </div>
            <Nav className='ml-auto' >
                <Link exact to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/faq'>FAQ</Link>
            </Nav>
        </Navbar>
    )
}

export default MyNavbar