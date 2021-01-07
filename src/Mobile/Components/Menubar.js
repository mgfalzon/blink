import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import { FaHome, FaInfoCircle, FaQuestion } from 'react-icons/fa'

import '../Styles/Components/menubar.css'

const MenuLink = props => (
  <NavLink exact to={props.href}
    className='link flex-grow-1 text-center font-weight-bold text-decoration-none'
    activeClassName='link-active'
  >{props.children}</NavLink>
)

const Menubar = () => (
    <>
      <div className='mt-3 p-3' />
      <Navbar className='d-flex flex-fill menubar mt-3 p-3' expand='lg' fixed='bottom'>
        <MenuLink href='/'><FaHome size='24'/></MenuLink>
        <MenuLink href='/about'><FaInfoCircle size='24'/></MenuLink>
        <MenuLink href='/faq'><FaQuestion size='24'/></MenuLink>
      </Navbar>
    </>
)

export default Menubar