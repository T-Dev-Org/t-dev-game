import React from 'react'
import { Link } from 'react-router-dom'
import './NextLevelButton.css'

const debug = true

function print_debug (text) {
  if (debug) {
    console.log(`[NextLevelButton.jsx]: ${text}`)
  }
}

const NextLevelButton = ({ to }) => {
  let prev = null

  if (to === '/level3') { prev = '/level1' } else if (to === '/level4') { prev = '/level2' } else if (to === '/profile') { prev = '/level3' }

  return (
    <>
      {debug &&
        <div className='container-button'>
          {prev &&
            <Link to={prev} className='button-next'>Anterior</Link>}
          <Link to={to} className='button-next'>Siguiente</Link>
        </div>}
    </>
  )
}

export default NextLevelButton
