import React from 'react'

function RoundedButton ({
  buttonText,
  onClick,
  buttonClass = '',
  disabled = null
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${buttonClass} rounded-pill`}
    >
      {buttonText}
    </button>
  )
}

export default RoundedButton
