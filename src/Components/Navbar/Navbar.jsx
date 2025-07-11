import React, { useRef, useState } from 'react'
import './Navbar.css'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const Navbar = () => {

  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  }

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  }

  return (
    <div className='navbar'>
        <p className='logo'>Divya Bhavsar</p>
        <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open' style={{cursor:"pointer"}} />
        <ul ref={menuRef} className='nav-menu'>
          <img src={menu_close} onClick={closeMenu} alt="" className='nav-mob-close' style={{cursor:"pointer"}} />
          <li><AnchorLink className='anchor-link' href='#home'><p onClick={()=>{setMenu("home")}}>Home</p></AnchorLink>{menu==="home"?<img src={underline}/>:<></>}</li>
          <li><AnchorLink className='anchor-link' offset={50} href='#education'><p onClick={()=>{setMenu("education")}}>Education</p></AnchorLink>{menu==="education"?<img src={underline}/>:<></>}</li>
          <li><AnchorLink className='anchor-link' offset={50} href='#project'><p onClick={()=>{setMenu("project")}}>Projects</p></AnchorLink>{menu==="project"?<img src={underline}/>:<></>}</li>
          <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>{setMenu("about")}}>About Me</p></AnchorLink>{menu==="about"?<img src={underline}/>:<></>}</li>
          <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>{setMenu("contact")}}>Contact Me</p></AnchorLink>{menu==="contact"?<img src={underline}/>:<></>}</li>
        </ul>
        <div className="nav-connect">
          <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink>
        </div>
    </div>
  )
}

export default Navbar