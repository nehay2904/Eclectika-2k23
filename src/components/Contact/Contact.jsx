import React from 'react'
import './Contact.css'
import Logo from '../../Images/Main_logo.png'
import { FormLabel } from '@mui/material'
import Form from '.././Form/Forms'
import Fade from 'react-reveal/Fade'
import { Link } from 'react-router-dom'
const Contact = () => {
  return (
    <div id='contact' className="Main_contact">
         <Fade bottom> <h1 className='footer_title'>ECLECTIKA</h1></Fade>
         <Form />
         <div className="footer_menu">
          
         <li><a href='#home'>HOME</a></li>  
         <li> <a href="#about_section">ABOUT</a></li> 
         <li> <a href="#events">EVENTS</a></li>
         <li> <a href="#sponsor">SPONSORS</a> </li>
         <li> <a href="#gallery">GALLERY</a> </li>
         <li><Link to='team'>TEAM</Link> </li> 
         <li> <a href="#contact">CONTACT</a></li> 
         </div>
        <div className='icons_container'>
        <div className="footer_icons">
          <a href="https://www.instagram.com/eclectika_nitrr/?hl=en" target='_blank'><i class="social_icon fab fa-instagram"></i></a>
          <a href="https://www.linkedin.com/company/eclectika-nit-raipur/?originalSubdomain=in" target='_blank'><i class="social_icon fab fa-linkedin"></i></a>
          <a href="https://www.facebook.com/eclectika.nitrr/" target='_blank'><i class="social_icon fab fa-facebook"></i></a>
          <a href="https://twitter.com/eclectika_nitrr?lang=en" target='_blank'><i class="social_icon fab fa-twitter"></i></a>
          <a href="https://www.youtube.com/channel/UCQ551qZJdqKoJkpBzUVtmTA" target='_blank'><i class="social_icon fab fa-youtube"></i></a>
         </div>
        </div>
        <h1 className='end_line'>@Copyrights <span>Eclectika 2023</span>. All rights reserved.</h1>
    </div>
  )
}

export default Contact