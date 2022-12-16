import React from 'react'
// import "./Skills.css";
const OtherSkills = () => {
  return (
  <div className='skills__content'>
    <h3 className='skills__title'>Other Skills</h3>
    <div className='skills__box'>
        <div className='skills__group'>
            <div className='skills__data'>
                <i class='bx bx-badge-check'></i>
                <div>
                    <h3 className='skills__name'>Java</h3>
                    <span className='skills__level'>Intermediate</span>
                </div>
            </div>

            <div className='skills__data'>
                <i class='bx bx-badge-check'></i>
                <div>
                    <h3 className='skills__name'>Python</h3>
                    <span className='skills__level'>Intermediate</span>
                </div>
            </div>

            <div className='skills__data'>
                <i class='bx bx-badge-check'></i>
                <div>
                    <h3 className='skills__name'>C programming</h3>
                    <span className='skills__level'>Basics</span>
                </div>
            </div>

            <div className='skills__data'>
                <i class='bx bx-badge-check'></i>
                <div>
                    <h3 className='skills__name'>Node js</h3>
                    <span className='skills__level'>Basics</span>
                </div>
            </div>

            <div className='skills__data'>
                <i class='bx bx-badge-check'></i>
                <div>
                    <h3 className='skills__name'>Git</h3>
                    <span className='skills__level'>Intermediate</span>
                </div>
            </div>
        </div>
    </div>
  </div>
  )
}

export default OtherSkills;