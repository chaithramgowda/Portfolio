import React from 'react'
import "./Footer.css";
const Footer = () => {
  return (
   <footer className='footer'>
    <div className='footer__container container'>
      <h1 className='footer__title'>Chaithra</h1>
      <ul className='footer__list'>
        <li>
          <a href="#about" className='footer__link'>About</a>
        </li>

        <li>
          <a href="#projects" className='footer__link'>Projects</a>
        </li>

        <li>
          <a href="#services" className='footer__link'>Services</a>
        </li>
      </ul>

      <div className='footer__social'>
      <a href='https://www.instagram.com/chaithram_gowda28' className='footer__social-link' target="_blank">
    <i class="uil uil-instagram"></i>
    </a>

    <a href='https://www.github.com/Chaithramgowda' className='footer__social-link' target="_blank">
    <i class="uil uil-github-alt"></i>
    </a> 
      </div>
      <div className='copy'>copyright &#169; 2022 .All rights reserved.</div>
    </div>
   </footer>
  )
}

export default Footer