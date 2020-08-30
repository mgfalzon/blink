import React from 'react'
import {Navbar, Nav, Image} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'

const MyNavbar = () => {

    const Link = props => (
        <NavLink {...props} 
            className='nav-link mx-1' 
            activeClassName='nav-link-active'
        >{props.children}</NavLink>
    ) 

    return (
        <Navbar className='w-100 py-3' style={{paddingRight: '6em', paddingLeft: '6em'}}>
            <Image className='mr-3' src={require('../Assets/logo.png')} width={45} height={45} />
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