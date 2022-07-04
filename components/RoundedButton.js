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
      className={`${buttonClass.toString()} rounded-pill`}
    >
      {buttonText.toString()}
    </button>
  )
}

export default RoundedButton
