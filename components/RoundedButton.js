import React from 'react'

function RoundedButton ({
  buttonText,
  buttonClass = '',
  buttonStyle = {},
  disabled = null
}) {
  return (
    <button
      style={buttonStyle}
      disabled={disabled}
      className={`${buttonClass} rounded-pill`}
    >
      {buttonText}
    </button>
  )
}

export default RoundedButton
