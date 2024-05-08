import React, { useState } from 'react'
import Endpage from './Endpage'
import { Button } from 'react-bootstrap'
import Mute from '../assets/Mute.svg'
import Video from '../assets/Video.svg'
import Screenshare from '../assets/Screen share.svg'
import Threedots from '../assets/three dots.svg'
import Endcall from '../assets/End call.svg'
import HandRaise from '../assets/Hand raise.svg'
import Left from '../assets/Left.svg'
import Chat from '../assets/Chat.svg'
import ScreenShareElement from './ScreenShare'
import { Link, useNavigate } from 'react-router-dom'
import Buttons from '../Button/Button.jsx'

const Buttonplace = ({ onEndCallClick, onScreenShareClick }) => {
  const [showPopup, setShowPopup] = useState(false)
  // const [isSplit, setIsSplit] = useState(false)
  const navigate = useNavigate()
  function startScreenShare() {
    navigate('/screenshare')
  }
  return (
    <div className='footer'>
      <div className='left-button1-container'>
        <Button
          type='button'
          class='btn btn-primary btn-lg'
          className='left-button1'
          variant='secondary'
          // onClick={() => {}}
          style={{ cursor: 'pointer', border: 'none' }}
        >
          <img
            src={Left}
            alt='SVG Icon'
            style={{
              // fill: '#9c5bf4',
              width: '30px',
              height: '30px',
              paddingTop: '2px',
            }}
          />
        </Button>
      </div>
      <Button
        type='button'
        class='btn btn-primary btn-lg'
        className='button1'
        variant='secondary'
        // onClick={() => {}}
        style={{ cursor: 'pointer', border: 'none' }}
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
        // onClick={() => {}}
        style={{ cursor: 'pointer', border: 'none' }}
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
      {/* <Link to='/screenshare'> */}
      <Buttons
        type='button'
        class='btn btn-primary btn-lg'
        className='button3'
        variant='secondary'
        onClick={startScreenShare}
        style={{ cursor: 'pointer', border: 'none' }}
      >
        <img
          src={Screenshare}
          alt='SVG Icon'
          style={{
            fill: '#9c5bf4',
            width: '30px',
            height: '30px',
            paddingTop: '2px',
            paddingRight: '4px',
          }}
        />
      </Buttons>
      {/* </Link> */}
      {/* {isSplit && <ScreenShare />} */}
      <Button
        type='button'
        class='btn btn-primary btn-lg'
        className='button4'
        variant='secondary'
        style={{ cursor: 'pointer', border: 'none', marginLeft: '14px' }}
      >
        <img
          src={Threedots}
          alt='SVG Icon'
          style={{
            fill: '#9c5bf4',
            width: '30px',
            height: '30px',
            paddingTop: '2px',
            border: 'none',
          }}
        />
      </Button>
      <div className='popup'>
        <Button
          type='button'
          className='btn btn-primary btn-lg button5'
          variant='secondary'
          onClick={onEndCallClick}
          style={{ borderRadius: '5px', cursor: 'pointer' }}
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
      <div className='right-buttons-container'>
        <Button
          type='button'
          class='btn btn-primary btn-lg'
          className='right-button1'
          variant='secondary'
          onClick={() => {}}
          style={{ cursor: 'pointer', border: 'none' }}
        >
          <img
            src={HandRaise}
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
          className='right-button2'
          variant='secondary'
          onClick={() => {}}
          style={{ cursor: 'pointer', marginLeft: '10px', border: 'none' }}
        >
          <img
            src={Chat}
            alt='SVG Icon'
            style={{
              fill: '#9c5bf4',
              width: '30px',
              height: '30px',
              paddingTop: '2px',
            }}
          />
        </Button>
      </div>
    </div>
  )
}

export default Buttonplace
