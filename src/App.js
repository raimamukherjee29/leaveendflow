import React, { useState } from 'react'
import Popup from './components/Popup'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar'
import VideoChat from './components/videochat'
import Buttonplace from './components/Buttonplace'
import Endpage from './components/Endpage'
import { ScreenShare } from './components'

const App = () => {
  const [showEndpage, setShowEndpage] = useState(false)
  const [showScreenShare, setScreenShare] = useState(false)
  const [showPopup, setShowPopup] = useState(false)

  const handleEndCall = () => {
    setShowPopup(!showPopup)
  }

  const handleScreenShare = () => {
    setScreenShare(true)
  }

  return (
    <>
      <Router>
        <div className='App'>
          {!showScreenShare && !showEndpage && <Navbar />}
          <Routes>
            <Route path='/' element={!showEndpage && <VideoChat />} />
            {showEndpage && <Route path='/endpage' element={<Endpage />} />}
          </Routes>
          {(!showEndpage && !showScreenShare && (
            <Buttonplace
              onEndCallClick={handleEndCall}
              onScreenShareClick={handleScreenShare}
            />
          )) ||
            (<Endpage /> && <ScreenShare />)}
          <Popup isOpen={showPopup} handleClose={() => setShowPopup(false)}>
            <div className='popup__text'>
              <p>Are you sure you want to end the call?</p>
              <button
                onClick={() => {
                  setShowEndpage(true)
                  setShowPopup(false)
                }}
              >
                End Call
              </button>
            </div>
          </Popup>
          <Routes>
            <Route path='/' element={!showScreenShare} />
            {showScreenShare && (
              <Route path='/screenshare' element={<ScreenShare />} />
            )}
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
