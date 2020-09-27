import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import{faInstagram,faTwitter,faFacebook} from "@fortawesome/free-brands-svg-icons"

const header = {color:'#3f3f3f', fontWeight: 'bold', textSpacing: 1}
const text = {color:'#32a2a2a', fontSize: 13}
const facebook_icon = {color: '#4968ad'}
const instagram_icon = {margin: '0 1rem', color: '#e95f62'}
const twitter_icon = {margin: '0 1rem', color: '#49a1eb'}

const TelLink = props => (
    <a className='tel-link' href={'tel:' + props.children}>{props.children}</a>
)

const SocialLink = props => (
    <a target="_blank" rel="noopener noreferrer" {...props}></a>
)

const SocialMedia = () => (
    <>
        <SocialLink href="https://www.facebook.com/blinkresume/" className="mr-3" style={facebook_icon}>
            <FontAwesomeIcon icon={faFacebook} size="2x"/>
        </SocialLink>   
        <SocialLink href="https://www.instagram.com/blinkresumes/" className="mr-3" style={instagram_icon}>
            <FontAwesomeIcon icon={faInstagram} size="2x"/>
        </SocialLink>   
        <SocialLink href="https://www.twitter.com/blinkresumes/"  style={twitter_icon}>
            <FontAwesomeIcon icon={faTwitter} size="2x"/>
        </SocialLink>   
    </>
)

const Footer = () => (
    <footer style={{
       display: "flex",
       width: "100%",
       backgroundColor: "gainsboro", 
       filter: "brightness(109%)", 
       borderRadius: "60% 60% 0% 0%", marginTop: 100, 
    }}>
        <div className='d-flex justify-content-start py-5' 
            style={{position: "relative", marginLeft: "auto", marginRight: "auto"}}
        >
            <div className='text-left mr-5'>
                <p className='text-uppercase' style={header}>Contact Us</p>
                <p className='font-weight-bold mb-1'>Blink Resume</p>
                <p style={text}>
                    ​1901 Research Blvd<br/>
                    Suite 320<br/>
                    ​Rockville, MD 20850
                </p>
                <TelLink>(301) 652-9112</TelLink>
            </div>
            <div className='text-left ml-5'>
                <p className='text-uppercase' style={header}>Business Hours</p>
                <p style={text}>
                    8:00am - 5:00pm Monday - Friday 
                </p>
            </div>
            <div className='text-left ml-5'>
                <p className='text-uppercase' style={header}>Social Media</p>
                <SocialMedia />
            </div>
        </div>
    </footer>

)

export default Footer