import React, { useState } from 'react';
import "./Qualification.css";

const Qualification = () => {
    const[toggleState,setToggleState] =useState(1);

    const toggleTab=(index)=>{
        setToggleState(index);
    }
  return (
<section className='qualification section' id='qualification'>
    <h2 className='section__title'>Qualification</h2>
    <span className='section__subtitle'>My Personal journey</span>
    <div className='qualification__container container'>
       <div className='qualification__tabs'>
       <div className={toggleState === 1 ? 'qualification__button qualification__active button--flex' : 'qualification__button button--flex'} onClick={()=> toggleTab(1)}>Details
            </div>

            <div className={toggleState === 2 ? 'qualification__button qualification__active button--flex' : 'qualification__button button--flex'} onClick={()=> toggleTab(2)}>Details
            </div>
        </div>

        <div className='qualification__sections'>
            <div className={toggleState === 1 ? 'qualification__content qualification__content-active' : 'qualification__content'}>
                <div className='qualification__data'>
                    <div>
                        <h3 className='qualification__title'>SSLC</h3>
                        <span className='qualification__subtitle'>Governoment high school, Thaggahalli</span>
                        <div className='qualification__percentage'>Percentage-84.7%</div>
                        <div className='qualification__calendar'>
                            <i className='uil uil-calendar-alt'></i> 2011-2014
                        </div>
                    </div>

                    <div>
                        <span className='qualification__rounder'></span>
                        <span className='qualification__line'></span>
                    </div>
                </div>
            </div>
                <div className={toggleState === 2 ? 'qualification__content qualification__content-active': 'qalification__content'}>



                <div className='qualification__data'>
                    <div></div>

                    <div>
                        <span className='qualification__rounder'></span>
                        <span className='qualification__line'></span>
                    </div>

                    
                    <div>
                        <h3 className='qualification__title'>PUC</h3>
                        <span className='qualification__subtitle'>Governoment Pre-University college, Thaggahalli</span>
                        <div className='qualification__percentage'>Percentage-84.0%</div>
                        <div className='qualification__calendar'>
                            <i className='uil uil-calendar-alt'></i> 2014-2016
                        </div>
                    </div>

                   
                </div>

                <div className='qualification__data'>

                    <div>
                        <h3 className='qualification__title'>BSC(PCM)</h3>
                        <span className='qualification__subtitle'>Governoment women's college,Mandya</span>
                        
                        <div className='qualification__percentage'>Percentage-79.8%</div>
                        <div className='qualification__calendar'>
                            <i className='uil uil-calendar-alt'></i> 2016-2019
                        </div>
                    </div>

                    <div>
                        <span className='qualification__rounder'></span>
                        <span className='qualification__line'></span>
                    </div>
                   
                </div>

                <div className='qualification__data'>
                    <div></div>

                    <div>
                        <span className='qualification__rounder'></span>
                        <span className='qualification__line'></span>
                    </div>

                    
                    <div>
                        <h3 className='qualification__title'>MCA</h3>
                        <span className='qualification__subtitle'>Visvesvarayya technological university,Mysore</span>
                        <div className='qualification__percentage'>CGPA-8.3</div>
                        <div className='qualification__calendar'>
                            <i className='uil uil-calendar-alt'></i> 2019-2022
                        </div>
                    </div>

                   
                </div>
            </div>
        </div>
    </div>
        
   
</section>
  )
}

export default Qualification