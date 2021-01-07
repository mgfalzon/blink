import React from 'react'
import { Navbar, Nav, Image } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

import '../Styles/Components/navbar.css'

const MyNavbar = () => {

    const Link = props => (
        <NavLink {...props} 
            className='nav-link mx-1' 
            activeClassName='nav-link-active'
        >{props.children}</NavLink>
    ) 

    return (
        <Navbar className='w-100 py-3'>
            <Image className='mr-3' src={require('../../Assets/logo.png')} />
            <Navbar.Brand>Blink Resume</Navbar.Brand>
            <Nav className='ml-auto'>
                <Link exact to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/faq'>FAQ</Link>
            </Nav>
        </Navbar>
    )
}

export default MyNavbar