import React from 'react'
import Logo from '../img/blogger-logo.png'

const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt="logo-footer" />
      <span>
         Copyright ©2022 | made with react
      </span>
    </footer>
  )
}

export default Footer