import React from 'react'
import pickUServiceImg from '../public/assets/picku service.png'
import { MainPageInfo } from './MainWrapper'
import RoundedButton from './RoundedButton'
import SecondPageFooter from './SecondPageFooter'

function SecondPageWrapper () {
  return (
    <div className='d-flex flex-column mt-md-5 pt-5'>
      <div className=' d-flex flex-grow-1 flex-md-row flex-column-reverse mb-md-5 pb-md-4 justify-content-center align-items-center mx-3 mx-md-5 px-4 gap-1'>
        <div className='flex-fill w-100 d-flex justify-content-center align-items-center mb-5 pb-5 pb-md-0 mb-md-0'>
          <img
            className='w-75'
            src={pickUServiceImg.src}
            alt='Pick U serivce via mobile app'
          />
        </div>

        <div className='flex-fill w-100 text-white lh-base d-flex flex-column justify-content-center align-items-md-start align-items-center mx-3 mx-md-5 mb-5 mb-md-0'>
          <MainPageInfo
            headerText={'Focused on Time Saving'}
            descText={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`}
          />
          <RoundedButton
            buttonText={'Download Mobile App'}
            buttonClass={'px-5 py-2 mt-2 button fw-bold'}
          />
        </div>
      </div>
      <SecondPageFooter />
    </div>
  )
}

export default SecondPageWrapper
