import React from 'react'
import loading from '../assets/loader.gif'

const Spinner = () => {
  return (
    <div className='loader'>
        <img className='loaderImg' src={loading} alt="loading" />
    </div>
  )
}

export default Spinner
