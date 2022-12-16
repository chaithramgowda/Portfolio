import React, { useState } from 'react';
import "./Services.css";
const Services = () => {
    const[toggleState,setToggleState] =useState(0);

    const toggleTab=(index)=>{
        setToggleState(index);
    }
  return (
   <section className='services section' id="services">
    <h2 className='section__title'>Services</h2>
    <span className='section__subtitle'>What i offer</span>
    <div className='services__container container grid'>
        <div className='services__content'>
            <div>
                <i className='uil uil-web-grid services__icon'></i>
                <h3 className='services__title'>Responsive web <br/> page developer</h3>
            </div>
            <span className='services__button' onClick={()=> toggleTab(1)}>View More<i className='uil uil-arrrow-right services__button-icon'></i></span>

            <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                <div className='services__modal-content'><i onClick={()=>toggleTab(0)} className='uil uil-times services__modal-close'></i>
             
                <p className='services__modal-description'>Yes I am a Fresher,but I give full of effortd to your company.Providing quality works to clients nd companies.</p>

                <ul className='services__modal-services grid'>
                    <li className='services__modal-service'>
                        <i className='uil uil-check-circle services__modal-icon'></i>
                        <p className='services__modal-info'>I develop the user Interface.</p>
                    </li>

                    <li className='services__modal-service'>
                        <i className='uil uil-check-circle services__modal-icon'></i>
                        <p className='services__modal-info'>Web page development.</p>
                    </li>

                    <li className='services__modal-service'>
                        <i className='uil uil-check-circle services__modal-icon'></i>
                        <p className='services__modal-info'>I create ux element interactions</p>
                    </li>

                    <li className='services__modal-service'>
                        <i className='uil uil-check-circle services__modal-icon'></i>
                        <p className='services__modal-info'>I position your company brand.</p>
                    </li>
                </ul>
                </div>
            </div>
     </div>

     <div className='services__content'>
            <div>
                <i className='uil uil-arrow services__icon'></i>
                <h3 className='services__title'>UI Developer</h3>
            </div>
            <span className='services__button' onClick={()=> toggleTab(1)}>View More<i className='uil uil-arrrow-right'></i></span>

            <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                <div className='services__modal-content'><i onClick={()=>toggleTab(0)} className='uil uil-times services__modal-close'></i>
                <h3 className='services__modal-title'>Web page developer</h3>
                <p className='services__modal-description'>Yes I am a Fresher,but I give full of effortd to your company.Providing quality works to clients nd companies.</p>

                <ul className='services__modal-services grid'>
                    <li className='services__modal-service'>
                        <i className='uil uil-check-circle services__modal-icon'></i>
                        <p className='services__modal-info'>I develop the user Interface.</p>
                    </li>

                    <li className='services__modal-service'>
                        <i className='uil uil-check-circle services__modal-icon'></i>
                        <p className='services__modal-info'>Web page development.</p>
                    </li>

                    <li className='services__modal-service'>
                        <i className='uil uil-check-circle services__modal-icon'></i>
                        <p className='services__modal-info'>I create ux element interactions</p>
                    </li>

                    <li className='services__modal-service'>
                        <i className='uil uil-check-circle services__modal-icon'></i>
                        <p className='services__modal-info'>I position your company brand.</p>
                    </li>
                </ul>
                </div>
            </div>
     </div>

     <div className='services__content'>
            <div>
                <i className='uil uil-edit services__icon'></i>
                <h3 className='services__title'>Javascript <br/> developer</h3>
            </div>
            <span className='services__button' onClick={()=> toggleTab(1)}>View More<i className='uil uil-arrrow-right'></i></span>

            <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                <div className='services__modal-content'><i onClick={()=>toggleTab(0)} className='uil uil-times services__modal-close'></i>
                <h3 className='services__modal-title'>Web page developer</h3>
                <p className='services__modal-description'>Yes I am a Fresher,but I give full of effort to your company.Providing quality works to clients and companies.</p>

                <ul className='services__modal-services grid'>
                    <li className='services__modal-service'>
                        <i className='uil uil-check-circle services__modal-icon'></i>
                        <p className='services__modal-info'>I develop the user Interface.</p>
                    </li>

                    <li className='services__modal-service'>
                        <i className='uil uil-check-circle services__modal-icon'></i>
                        <p className='services__modal-info'>Web page development.</p>
                    </li>

                    <li className='services__modal-service'>
                        <i className='uil uil-check-circle services__modal-icon'></i>
                        <p className='services__modal-info'>I create ux element interactions.</p>
                    </li>

                    <li className='services__modal-service'>
                        <i className='uil uil-check-circle services__modal-icon'></i>
                        <p className='services__modal-info'>I position your company brand.</p>
                    </li>
                </ul>
                </div>
            </div>
     </div>
    </div>
</section>
  )
}

export default Services