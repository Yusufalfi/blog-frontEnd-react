import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../img/blogger-logo.png'


const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='container '>
        <div className='logo'>
          <img src={Logo} alt='logo' />
        </div>
        <div className='links'>
          <Link className='link' to='/?cat=art'><h6>ARTS</h6></Link>
          <Link className='link' to='/?cat=design'><h6>Design</h6></Link>
          <Link className='link' to='/?cat=technology'><h6>Technology</h6></Link>
          <Link className='link' to='/?cat=politic'><h6>Politik</h6></Link>
          <Link className='link' to='/?cat=football'><h6>Football</h6></Link>
          <Link className='link' to='/?cat=gadget'><h6>Gadget</h6></Link>
          <span>Jhon</span>
          <span>Logout</span>
          <span className='write'>
            <Link style={{textDecoration: 'none'}} className='write' to="/write">Write Blog</Link>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Navbar