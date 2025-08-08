import React from 'react'
import './Header.css'

export default function Header() {
  return (
    <header id="header">
        <p id="name">Nazar Atamaniuk</p>
        <ul className='menu'>
          <a href="#ContactInfo" className='menuA'>Contact information</a>
          <a href="#SkillAndTools" className='menuA'>Skills & Tools</a>
          <a href="#Education" className='menuA'>Education</a>
          <a href="#Projects" className='menuA'>Projects</a>
        </ul>
    </header>
  )
}

window.addEventListener('scroll', function() {
  const header = document.getElementById('header');
  const name = document.getElementById('name');
  if (window.scrollY > 50) {
    header.classList.add('shrink');
    name.classList.add('shrink2');
  } else {
    header.classList.remove('shrink');
    name.classList.remove('shrink2');
  }
});