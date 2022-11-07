import React, { useState } from 'react';
import './login.css'

const Login = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  return (
    <section className='container section'>
        <div className="login__interface">
            <form className="login__form">
                <h2 className='form__title'>Login Here</h2>
                <input type="name" placeholder='Name' value={name} onChange={ (e) => setName(e.target.value)}/>
                <input type="email" placeholder='Email' value={email} onChange={ (e) => setEmail(e.target.value)}/>
                <input type="password" placeholder='Password' value={password} onChange={ (e) => setPassword(e.target.value)}/>
                <button type='submit' className='submit__button'>Login</button>
            </form>
        </div>
    </section>
  )
}

export default Login