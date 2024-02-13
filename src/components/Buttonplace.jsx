import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import Endpage from './Endpage'
import Mute from '../assets/Mute.svg'
import Video from '../assets/Video.svg'
import Screenshare from '../assets/Screen share.svg'
import Threedots from '../assets/three dots.svg'
import Endcall from '../assets/End call.svg'

const Buttonplace = ({ onEndCallClick }) => {
  const [showPopup, setShowPopup] = useState(false)
  return (
    <div className='footer'>
      <Button
        type='button'
        class='btn btn-primary btn-lg'
        className='button1'
        variant='secondary'
        onClick={() => {}}
      >
        <img
          src={Mute}
          alt='SVG Icon'
          style={{
            fill: '#9c5bf4',
            width: '30px',
            height: '30px',
            paddingTop: '2px',
          }}
        />
      </Button>
      <Button
        type='button'
        class='btn btn-primary btn-lg'
        className='button2'
        variant='secondary'
        onClick={() => {}}
      >
        <img
          src={Video}
          alt='SVG Icon'
          style={{
            fill: '#9c5bf4',
            width: '32px',
            height: '30px',
            paddingTop: '2px',
          }}
        />
      </Button>
      <Button
        type='button'
        class='btn btn-primary btn-lg'
        className='button3'
        variant='secondary'
        onClick={() => {}}
      >
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
      </Button>
      <Button
        type='button'
        class='btn btn-primary btn-lg'
        className='button4'
        variant='secondary'
        onClick={() => {}}
      >
        <img
          src={Threedots}
          alt='SVG Icon'
          style={{
            fill: '#9c5bf4',
            width: '30px',
            height: '30px',
            paddingTop: '2px',
          }}
        />
      </Button>
      <div className='popup'>
        <Button
          type='button'
          className='btn btn-primary btn-lg button5'
          variant='secondary'
          onClick={onEndCallClick}
          style={{ borderRadius: '5px' }}
        >
          <img
            src={Endcall}
            alt='SVG Icon'
            style={{
              fill: '#9c5bf4',
              width: '65px',
              height: '30px',
              paddingTop: '2px',
            }}
          />
        </Button>
        {showPopup && (
          <div className='popuptext'>Your popup text goes here.</div>
        )}
      </div>
    </div>
  )
}

export default Buttonplace
