import React, { useState } from 'react'
import Popup from './components/Popup'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar'
import VideoChat from './components/videochat'
import Buttonplace from './components/Buttonplace'
import Endpage from './components/Endpage'

const App = () => {
  const [showEndpage, setShowEndpage] = useState(false)
  const [showPopup, setShowPopup] = useState(false)

  const handleEndCall = () => {
    setShowPopup(!showPopup)
  }

  return (
    <Router>
      <div className='App'>
        {!showEndpage && <Navbar />}
        <Routes>
          <Route path='/' element={!showEndpage && <VideoChat />} />
          {showEndpage && <Route path='/endpage' element={<Endpage />} />}
        </Routes>
        {(!showEndpage && <Buttonplace onEndCallClick={handleEndCall} />) || (
          <Endpage />
        )}
        <Popup isOpen={showPopup} handleClose={() => setShowPopup(false)}>
          <div className='popup__text'>
            <p>Are you sure you want to end the call?</p>
            <button onClick={() => setShowEndpage(true)}>End Call</button>
          </div>
        </Popup>
      </div>
    </Router>
  )
}

export default App
