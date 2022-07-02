import React from 'react'

function Contacts () {
  return (
    <div className='d-flex flex-row gap-5 text-color justify-content-center'>
      <span className='navbar-text text-color'>
        <i class='bi bi-telephone-fill pe-2'></i>
        +769 586 4558
      </span>

      <span className='navbar-text'>
        <i class='bi bi-envelope-fill pe-2'></i>
        <a href="mailto:service@openauto.ca" className='text-decoration-none text-color'>service@openauto.ca</a>
      </span>
    </div>
  )
}

export default Contacts
