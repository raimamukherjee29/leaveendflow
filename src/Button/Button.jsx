import React from 'react'
import Screenshare from '../assets/Screen share.svg'

const Button = ({ onClick }) => {
  return (
    <button onClick={onClick} style={{ border: 'none' }}>
      <img
        src={Screenshare}
        alt='SVG Icon'
        style={{
          fill: '#9c5bf4',
          width: '30px',
          height: '30px',
          paddingTop: '2px',
        }}
      />
    </button>
  )
}

export default Button
