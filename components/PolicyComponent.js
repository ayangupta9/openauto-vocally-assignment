import React from 'react'
import Link from 'next/link'

function PolicyComponent () {
  return (
    <div className='d-flex flex-row d-md-none justify-content-evenly w-100 my-3'>
      <Link href='#' passHref>
        <a className='link text-decoration-none text-color' target={'_blank'}>
          Privacy Policy
        </a>
      </Link>
      <Link href='#' passHref>
        <a className='link text-decoration-none text-color' target={'_blank'}>
          Terms of Use
        </a>
      </Link>
      <Link href='#' passHref>
        <a className='link text-decoration-none text-color' target={'_blank'}>
          Cookie Policy
        </a>
      </Link>
    </div>
  )
}

export default PolicyComponent
