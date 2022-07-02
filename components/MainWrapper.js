import React from 'react'
import mainPageImg from '../public/assets/Pickup_Illustration.png'
import MainPageFooter from './MainPageFooter'
import MainPageForm from './MainPageForm'

export function MainPageInfo ({ headerText, descText }) {
  return (
    <div className='text-center text-md-start fw-light text-color'>
      <h1 className='display-5 fw-bold mb-4'>{headerText}</h1>
      <p className='lh-lg'>{descText}</p>
    </div>
  )
}

function MainWrapper () {
  return (
    <div>
      <div className='pt-2 d-flex flex-md-row flex-column mx-3 mx-md-5 px-4 gap-1'>
        <div className='py-5 px-0 text-white d-flex flex-column align-items-center justify-content-center w-100'>
          <MainPageInfo
            headerText={'Vehicle Maintenance From The Comfort of Your Home'}
            descText={`Open Auto Soothes the hassle of maintaining your vehicle and helps you
        deal with unexpected repairs worry free`}
          />
          <MainPageForm />
        </div>
        <div className='px-0 d-flex flex-column align-items-center justify-content-center'>
          <img
            style={{
              maxWidth: '95%'
            }}
            src={mainPageImg.src}
            alt='Pickup Illustation'
          />
        </div>
      </div>
      <MainPageFooter />
    </div>
  )
}

export default MainWrapper
