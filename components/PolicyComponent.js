import React from 'react'
import Link from 'next/link'

function PolicyComponent () {
  return (
    <div className='d-flex flex-row d-md-none justify-content-evenly w-100 my-3'>
      <Link href='#' target={'_blank'}>
        <a className='link text-decoration-none text-color'>Privacy Policy</a>
      </Link>
      <Link target={'_blank'} href='#'>
        <a className='link text-decoration-none text-color'>Terms of Use</a>
      </Link>
      <Link href='#' target={'_blank'}>
        <a className='link text-decoration-none text-color'>Cookie Policy</a>
      </Link>
    </div>
  )
}

export default PolicyComponent
