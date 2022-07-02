import React from 'react'
import Link from 'next/link'

function Contacts () {
  return (
    <div className='d-flex flex-row gap-5 text-color justify-content-center'>
      <span className='navbar-text text-color'>
        <i className='bi bi-telephone-fill pe-2'></i>
        +769 586 4558
      </span>

      <span className='navbar-text'>
        <i className='bi bi-envelope-fill pe-2'></i>
        <Link href='mailto:service@openauto.ca'>
          <a className='text-decoration-none text-color'>service@openauto.ca</a>
        </Link>
      </span>
    </div>
  )
}

export default Contacts
