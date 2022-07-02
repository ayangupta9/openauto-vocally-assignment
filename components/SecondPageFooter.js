import React from 'react'
import penAutologo from '../public/assets/penauto-logo.png'
import Contacts from './Contacts'
import PolicyComponent from './PolicyComponent'
import Socials from './Socials'

function SecondPageFooter () {
  return (
    <div className='w-100 d-flex flex-column pb-3'>
      <div className='d-flex flex-lg-row flex-column justify-content-between align-items-center'>
        <div className='flex-grow-1'>
          <a class='navbar-brand ms-5' href='#'>
            <img src={penAutologo.src} height='50' alt='' />
          </a>
        </div>
        <div className='me-lg-5 my-lg-0 my-3'>
          <Contacts />
        </div>
      </div>

      <div className='d-flex flex-lg-row flex-column justify-content-between align-items-center text-color'>
        <p className='flex-fill ms-lg-5'>
          Open Auto @ all rights reserved
        </p>
        <PolicyComponent />
        <Socials />
      </div>
    </div>
  )
}

export default SecondPageFooter
