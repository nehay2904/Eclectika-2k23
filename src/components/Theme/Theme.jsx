import React from 'react'
import './Theme.css'
import { Fade } from 'react-reveal'
const Theme = () => {
  return (
    <div className="themeCon">
        <div><Fade bottom><h1 className="theme_title"> OUR THEME</h1></Fade></div>
      <div className="content_box">
      <p className="theme_content">
      Get ready for an exhilarating experience at our superhero-themed event, where ordinary moments transform into extraordinary memories. Unleash your inner hero as we bring the vibrant world of comic books and blockbuster films to life. From thrilling cosplay showcases to interactive superhero challenges, immerse yourself in a day filled with action-packed fun for all ages. Join forces with fellow fans, meet iconic characters, and celebrate the spirit of heroism in a dynamic atmosphere that's perfect for families, friends, and superhero enthusiasts alike. Embrace the adventure, strike your best superhero pose, and make lasting memories at our unforgettable superhero-themed event!
          </p>
      </div>
    </div>
  )
}

export default Theme