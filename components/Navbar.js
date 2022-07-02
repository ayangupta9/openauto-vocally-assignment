import Link from 'next/link'
import penAutologo from '../public/assets/penauto-logo.png'
import RoundedButton from './RoundedButton'
import Contacts from './Contacts'

export default function Nav () {
  return (
    <nav className='navbar px-5 pt-4'>
      <Link href='/' className='navbar-brand'>
        <img src={penAutologo.src} height='50' alt='OpenAuto Logo' />
      </Link>

      <div className='fw-light d-none navbar-components d-md-flex flex-row gap-5'>
        <Contacts />
        <RoundedButton
          buttonText={'Download Mobile App'}
          buttonClass={'px-5 py-2 button fw-bold'}
        />
      </div>
    </nav>
  )
}
