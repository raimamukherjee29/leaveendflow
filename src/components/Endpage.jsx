import React from 'react'
import { Button } from 'react-bootstrap'

const Endpage = () => {
  return (
    <div className='new-page-container'>
      <div className='new-page-header'>
        <h1>Company</h1>
      </div>
      <div className='new-page-content'>
        <div>
          <h1>You left the session</h1>
          <p className='niceday'>Have a nice day!</p>
          <br />
          <Button
            type='button'
            class='btn btn-primary btn-lg'
            className='endbutton1'
            variant='secondary'
            onClick={() => {}}
          >
            B1
          </Button>
          <Button
            type='button'
            class='btn btn-primary btn-lg'
            className='endbutton2'
            variant='secondary'
            onClick={() => {}}
          >
            B2
          </Button>
        </div>
      </div>

      <div className='new-page-footer'>
        <p>Copyright © Company 2024</p>
      </div>
    </div>
  )
}

export default Endpage
