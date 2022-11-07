import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './logout.css'
import { logout, selectUser } from '../../features/userSlice';

const LogOut = () => {

  const user = useSelector(selectUser);

  const dispatch = useDispatch();
  const handleLogOut = (e) => {
    e.preventDefault();
    dispatch(logout())
  }

  return (
    <div className='logout'>
        <h1>Hello <span className='user__name'>{user.name}</span></h1>
        <button type='submit' className='logout__button' onClick={ (e) => handleLogOut(e)}>Logout</button>
    </div>
  )
}

export default LogOut