import React from 'react'
import './SandT.css'
import icHTML from './img/icHTML.png'
import icCSS from './img/icCSS.png'
import icJS from './img/icJS.png'
import icFigma from './img/icFigma.png'
import icGitHub from './img/icGitHub.png'
import icVScode from './img/icVScode.png'
import icPs from './img/icPs.png'
import icReact from './img/icReact.png'

export default function SandT() {
  return (
    <div id='SkillAndTools'>
        <h2>Skills & Tools</h2>
        <div className="SandT-blocks">
            <div className='Skills-block'>
                <div className='SkillTools'><img src={icHTML} alt="html" /><p>HTML</p></div>
                <div className='SkillTools'><img src={icCSS} alt="css" /><p>CSS</p></div>
                <div className='SkillTools'><img src={icJS} alt="js" /><p>JavaScript</p></div>
                <div className='SkillTools'><img src={icReact} className='react-spin' alt="react" /><p>React</p></div>
            </div>
            <div className='Tools-block'>
                <div className='SkillTools'><img src={icFigma} alt="figma" /><p>Figma</p></div>
                <div className='SkillTools'><img src={icGitHub} alt="github" /><p>GitHub</p></div>
                <div className='SkillTools'><img src={icVScode} alt="vscode" /><p>VS Code</p></div>
                <div className='SkillTools'><img src={icPs} alt="ps" /><p>Adobe Photoshop</p></div>
            </div>
        </div>
    </div>
  )
}
