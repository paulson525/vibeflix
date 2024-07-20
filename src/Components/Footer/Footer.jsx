import React from 'react'
import './Footer.css'
import watermark from '../../assets/favicon-watermark.png'
import insta from '../../assets/instalogo.png'
import fb from '../../assets/fblogo.png'
import x from '../../assets/twitterxlogo.png'
import gplay from '../../assets/googleplay.png'
import appstore from '../../assets/appstore.png'

const Footer = () => {
  return (
    <div className='footer'>

      <div className="prefooter">
        <div className="contact">
          <a href="/"><img src={watermark} alt="" /></a>

          <div className="connect">
            <p>Connect With Us:</p>
            <div className="clinks">
              <a href="#"><img src={x} alt="twitter" /></a>
              <a href="#"><img src={insta} alt="instagram" /></a>
              <a href="#"><img src={fb} alt="facebook" /></a>
            </div>
          </div>

          <div className="appstores">
            <p>Download Our Mobile App:</p>
            <div className="appimg">
              <a href="#"><img src={gplay} alt="" /></a>
              <a href="#"><img src={appstore} alt="" /></a>
            </div>
          </div>

          <div className="mail">
            <p>Contact Us:</p><a href="mailto: support@vibeflix.video">support@vibeflix.video</a>
          </div>
        </div>

        <div className="main-footer">
          <p>&copy; Copyright 2024 VibeFlix.Pvt Ltd. &nbsp;All Rights Reserved.</p>
        </div>

      </div>

    </div>
  )
}

export default Footer