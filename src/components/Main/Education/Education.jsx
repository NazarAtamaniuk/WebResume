import React from 'react'
import './Education.css'
import icVNTU from './img/vntu.png'
import icFitki from './img/icFitki.png'
import icMagistr from './img/icMagistr.png'
import icSoon from './img/soon.png'

export default function Education() {
  return (
    <div id='Education'>
        <h2>Education</h2>
        <div className='progress-bar'>
            <div className="dots"></div>
            <div className="line"></div>
            <div className="dots"></div>
            <div className="line"></div>
            <div className="dots"></div>
            <div className="line"></div>
            <div className="dots"></div>
        </div>
        <div className="info-edu-container">
          <div className="info-edu-box"><div className="vertical-line"></div>
            <div className="info-edu">
              <img src={icVNTU} alt="vntu" />
              <p>In 2020, I graduated from school and entered Vinnytsia National Technical University (VNTU)</p></div>
          </div>
          <div className="info-edu-box"><div className="vertical-line"></div>
            <div className="info-edu">
              <img src={icFitki} alt="vntu" />
              <p>In june 2024, I received a bachelor's degree in "123 Computer Engineering", educational program "System Programming"</p></div>
          </div>
          <div className="info-edu-box"><div className="vertical-line"></div>
            <div className="info-edu">
              <img src={icMagistr} alt="vntu" />
              <p>In September 2024, I enrolled in a master's degree at Vinnytsia National Technical University, majoring in "123 Computer Engineering"</p></div>
          </div>
          <div className="info-edu-box"><div className="vertical-line"></div>
            <div className="info-edu">
              <img src={icSoon} alt="vntu" />
              <p>Master's degree</p></div>
          </div>
        </div>
    </div>
  )
}
