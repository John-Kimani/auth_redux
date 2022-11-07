import React from 'react';
import './logout.css'

const LogOut = () => {
  return (
    <div>
        <h1>Hello <span className='user__name'>Kimani</span></h1>
        <button type='submit' className='logout__button'>Logout</button>
    </div>
  )
}

export default LogOut