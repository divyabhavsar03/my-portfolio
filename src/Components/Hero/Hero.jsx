import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" />
      <h1>Hi, <span className='hero-name-span'>I'm Divya Bhavsar</span> from Calgary, AB, Canada. <br />I build <span className='hero-website-span'>websites</span> 💻 and <span className='hero-geomatics-span'>geospatial experiences </span>🛰️.</h1>
      <center>
      <p>I am a <span className='hero-geo-deg-span'>Geomatics Engineering MEng student</span> at the <span className='hero-uni-span'>University of Calgary</span> with a strong background in <span className='hero-comp-deg-span'>Computer Engineering</span>. I specialize in <span className='hero-skill-span'>GNSS Satellite Positioning, Photogrammetry, GIS using ArcGIS Pro, and Web Development</span>.
      <br />
       From processing satellite data 🛰️ with Python to building interactive web apps 💻 with React, <span className='hero-bottom-span'> I blend code, positioning, maps, and data to solve real-world problems </span>💡.
      </p>
      </center>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume"><a href="/Divya-Bhavsar-Resume.pdf" download target="_blank" rel="noopener noreferrer" className='anchor-link'>My resume</a></div>
      </div>
    </div>
  )
}

export default Hero