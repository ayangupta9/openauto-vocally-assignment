import React from 'react'
import Socials from './Socials'
import openAutoIcon from '../public/assets/openauto-icon.png'

function MainPageFooter () {
  return (
    <footer className='d-flex flex-row'>
      <div
      style={{
        marginLeft:'29px'
      }}
       className='d-none w-100 d-lg-flex justify-content-end openauto-icon-wrapper flex-grow-1'>
        <img
          height={55}
          className='openauto-icon'
          src={openAutoIcon.src}
          alt='OPENAUTO ICON'
        />
      </div>
      <div className='w-100 justify-self-end position-relative flex-grow-1'>
        <Socials />
      </div>
    </footer>
  )
}

export default MainPageFooter
