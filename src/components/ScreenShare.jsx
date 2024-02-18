import React from 'react'
import Navbar from './navbar'
import ButtonPlace from './Buttonplace'

const ScreenShare = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className='screen-split'>
        <div className='left-box'>Sharing Screen</div>
        <div className='right-box'>User</div>
      </div>
      <div style={{ marginTop: '80px' }}>
        <ButtonPlace />
      </div>
    </>
  )
}

export default ScreenShare
