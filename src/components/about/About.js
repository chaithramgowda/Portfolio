import React from 'react';
import "./About.css";
import AboutImg from "../../assets/image.jpg";
import CV from "../../assets/Chaithra.CV.pdf"
import Info from './Info';
function About() {
  return (
<section className='about section' id='about'>
    <h2 className='section__title'>About Me</h2>
    <span className='section__subtitle'>My introduction</span>
    <div className='about__container container grid'>
        <img src={AboutImg} alt="" className='about__img'/>
        <div className='about__data'>
            <Info/>
            <p className='about__description'>Frontend Web Developer, I create web pages with User interface, I have a fresher...</p>
            <a download="" href={CV} className="button button--flex">Download CV
            <i class="uil uil-document-info"></i>
            </a>
        </div>
    </div>
</section>
  )
}

export default About