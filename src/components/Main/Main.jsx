import React from 'react'
import ConInfo from './ConInfo/ConInfo';
import SandT from './SkillsAndTools/SandT';
import Education from './Education/Education';
import Projects from './Projects/Projects';

export default function Main() {
  return (
    <div className="wrapper" style={{paddingBottom: 500 + 'px'}}>
      <ConInfo/>
      <SandT/>
      <Education/>
      <Projects/>
    </div>
  )
}


