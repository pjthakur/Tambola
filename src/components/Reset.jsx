import React from 'react'
import Loader from './Loader'
import './styles/reset.css'
const Reset = () => {
    const reset =() =>{
        localStorage.clear()
        window.location.reload()
    }
  return (
    <div className='reset'>
        <Loader />
        <button className='reset-button' onClick={reset}>Restart the game</button>
    </div>
  )
}

export default Reset