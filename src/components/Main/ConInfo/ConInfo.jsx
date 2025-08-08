import React from 'react'
import './ConInfo.css'
import siluet from './siluet.png'

export default function ConInfo() {
  return (
    <div id='ContactInfo'>
        <div className='CopyDone'></div>
        <div>
            <div className='objective'>Frontend Developer</div>
            <ul className='infoUl'>
                <li className='infoLi'>Phone number <div className='hoverInfo'>+380987343986</div></li>
                <li className='infoLi'>Gmail <div className='hoverInfo'>nazik.igrek@gmail.com</div></li>
                <li className='infoLi TG' onClick={TGClick}>Telegram</li>
                <li className='infoLi GHub' onClick={GHubClick}>GitHub</li>
            </ul>
        </div>
        <img className='siluet' src={siluet} alt="#" />
    </div>
  )
}

document.addEventListener('click', (event) => {
  const listItem = event.target.closest('.infoLi');
  if (!listItem) return;
  const infoElement = listItem.querySelector('.hoverInfo');
  if (!infoElement) return;
  const copyFeedback = () => {
    const targetElement = document.querySelector('.CopyDone');
    if (!targetElement) return;
    const textToCopy = infoElement.innerText;
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        requestAnimationFrame(() => {
          targetElement.textContent = `Copied: ${textToCopy}`;
          targetElement.id = 'CopyDoneVis';
          clearTimeout(targetElement.copyTimeout);
          targetElement.copyTimeout = setTimeout(() => {
            targetElement.id = '';
          }, 1500);
        });
      })
      .catch(err => {
        console.error("Copy failed:", err);
        if (targetElement) {
          targetElement.textContent = "Copy failed";
          targetElement.id = 'CopyDoneVis';
          setTimeout(() => { targetElement.id = ''; }, 1500);
        }
      });
  };
  copyFeedback();
});

const TGClick = () => {
    window.open('https://t.me/Ha3apiKyc', '_blank', 'noopener,noreferrer');
};
const GHubClick = () => {
    window.open('https://github.com/NazarAtamaniuk', '_blank', 'noopener,noreferrer');
};