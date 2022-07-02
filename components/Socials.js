import React from 'react'
import Link from 'next/link'
function Socials () {
  const socialLinks = {
    'bi-facebook': 'https://facebook.com',
    'bi-twitter': 'https://twitter.com',
    'bi-youtube': 'https://youtube.com',
    'bi-linkedin': 'https://linkedin.com',
    'bi-instagram': 'https://instagram.com'
  }

  return (
    <div className='d-flex flex-row gap-5 justify-content-lg-end justify-content-center px-5 py-3'>
      {Object.entries(socialLinks).map(social => {
        return (
          <Link key={social[0]} href={social[1]} target={'_blank'}>
            <i className={`bi ${social[0]} text-color cursor-pointer`}></i>
          </Link>
        )
      })}
    </div>
  )
}

export default Socials
