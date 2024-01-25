import React from 'react'
import './Contact.css'
import { FormLabel } from '@mui/material'
import Form from '../Form/Forms'
import Fade from 'react-reveal/Fade'
import { Link } from 'react-router-dom'
import emailjs from '@emailjs/browser';
const Contact = () => {



  return (
    <div id='contact' className="Main_contact">
      <Fade bottom> <h1 className='footer_title'>ECLECTIKA</h1></Fade>
      <div className="forms">
        <input className='contact_input' type="text" placeholder='Name'/>
        <input className='contact_input' type="text" placeholder='Email'/>
        <input className='contact_input' type="text" placeholder='Write your thoughts'/>
        <button>Submit</button>
      </div>
      <div className="left-side">
					<div className="address details">
						<i className="fas fa-map-marker-alt"></i>
						<div className="topic">Address</div>
						<div className="text-one">Great Eastern Rd, Amanaka</div>
						<div className="text-two">Raipur, Chhattisgarh 492010</div>
					</div>
					<div className="phone details">
						<i className="fas fa-phone-alt"></i>
						<div className="topic">Phone</div>
						
						<div className="text-two"> 070936 75886</div>
					</div>
					<div className="email details">
						<i className="fas fa-envelope"></i>
						<div className="topic">Email</div>
						<div className="text-one">teamsanskriti@nitrr.ac.in</div>
						<div className="text-two">eclectika@nitrr.ac.in</div>
					</div>
				</div>
        <div className=" centeringmapvideo">
				<div className="containerforvideo">
					<iframe width="250px" height="140px" src="https://www.youtube.com/embed/oLviql5a63E"
						title="YouTube video player" frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						allowfullscreen></iframe>
				</div>
			</div>
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
          <a href="https://www.instagram.com/eclectika_nitrr/?hl=en" target='_blank'><i className="social_icon fab fa-instagram"></i></a>
          <a href="https://www.linkedin.com/company/eclectika-nit-raipur/?originalSubdomain=in" target='_blank'><i className="social_icon fab fa-linkedin"></i></a>
          <a href="https://www.facebook.com/eclectika.nitrr/" target='_blank'><i className="social_icon fab fa-facebook"></i></a>
          <a href="https://twitter.com/eclectika_nitrr?lang=en" target='_blank'><i className="social_icon fab fa-twitter"></i></a>
          <a href="https://www.youtube.com/channel/UCQ551qZJdqKoJkpBzUVtmTA" target='_blank'><i className="social_icon fab fa-youtube"></i></a>
        </div>


      </div>

      <h1 className='end_line'>@Copyrights <span>Eclectika 2023</span>. All rights reserved.</h1>
    </div>
  )
}

export default Contact