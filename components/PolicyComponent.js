import React from 'react'
import Link from 'next/link'

function PolicyComponent () {
  return (
    <div className='d-flex flex-row d-md-none justify-content-evenly w-100 my-3'>
      <Link
        className='link text-decoration-none text-color'
        href='#'
        target={'_blank'}
      >
        Privacy Policy
      </Link>
      <Link
        className='link text-decoration-none text-color'
        target={'_blank'}
        href='#'
      >
        Terms of Use
      </Link>
      <Link
        href='#'
        className='link text-decoration-none text-color'
        target={'_blank'}
      >
        Cookie Policy
      </Link>
    </div>
  )
}

export default PolicyComponent
