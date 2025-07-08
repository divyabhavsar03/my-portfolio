import React from 'react'
import './Footer.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-title">
            <h1>Divya Bhavsar</h1>
        </div>
        <div className="footer-info">
            <p>&copy;2025 Divya Bhavsar. <span>All Rights Reserved</span></p>
        </div>
        <div className="footer-more">
            <p>Calgary, AB  <img src="https://flagcdn.com/ca.svg" style={{ width: '14px', height: 'auto' }} /></p>
            <AnchorLink className='anchor-link' offset={50} href='#contact'><p>Connect with me</p></AnchorLink>
            <div className="footer-nav">
              <AnchorLink className='anchor-link' offset={50} href='#home'><p>Home</p></AnchorLink>
              <AnchorLink className='anchor-link' offset={50} href='#education'><p>Education</p></AnchorLink>
              <AnchorLink className='anchor-link' offset={50} href='#project'><p>My Projects</p></AnchorLink>
              <AnchorLink className='anchor-link' offset={50} href='#about'><p>About me</p></AnchorLink>
            </div>
        </div>
    </div>
  )
}

export default Footer