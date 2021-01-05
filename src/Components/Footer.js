import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import{faInstagram,faTwitter,faFacebook} from "@fortawesome/free-brands-svg-icons"

import '../Styles/Components/footer.css'

const TelLink = props => (
    <a className='tel-link' href={'tel:' + props.children}>{props.children}</a>
)

const SocialLink = props => (
    <a target="_blank" rel="noopener noreferrer" {...props}></a>
)

const SocialMedia = () => <>
    <SocialLink href="https://www.facebook.com/blinkresume/" className="facebook-icon mr-3">
        <FontAwesomeIcon icon={faFacebook} size="2x"/>
    </SocialLink>   
    <SocialLink href="https://www.instagram.com/blinkresumes/" className="instagram-icon mr-3">
        <FontAwesomeIcon icon={faInstagram} size="2x"/>
    </SocialLink>   
    <SocialLink href="https://www.twitter.com/blinkresumes/"  className="twitter-icon">
        <FontAwesomeIcon icon={faTwitter} size="2x"/>
    </SocialLink>   
</>

const Footer = () => (
    <footer>
        <div className='d-flex justify-content-center py-5'>
            <div className='text-left mr-5'>
                <p className='header text-uppercase'>Contact Us</p>
                <p className='font-weight-bold mb-1'>Blink Resume</p>
                <p className='text'>
                    ​1901 Research Blvd<br/>
                    Suite 320<br/>
                    ​Rockville, MD 20850
                </p>
                <TelLink>(301) 652-9112</TelLink>
            </div>
            <div className='text-left ml-5'>
                <p className='header text-uppercase'>Business Hours</p>
                <p className='text'>
                    8:00am - 5:00pm Monday - Friday 
                </p>
            </div>
            <div className='text-left ml-5'>
                <p className='header text-uppercase'>Social Media</p>
                <SocialMedia />
            </div>
        </div>
    </footer>
)

export default Footer