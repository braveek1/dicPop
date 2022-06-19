import React, { Component } from 'react';
import '../css/loginForm.css';
import { MdAlternateEmail } from 'react-icons/md';
import { RiLockPasswordLine } from 'react-icons/ri';

class LoginForm extends Component {
  render() {
    return (
      <div className='loginForm-container'>
        <div className='title'>Sign in</div>
        <div className='loginForm'>
          <div className='email-input'>
            <MdAlternateEmail className='email-icon' />
            <input className='email' type='text' placeholder='Email address' />
          </div>
          <div className='password-input'>
            <RiLockPasswordLine className='password-icon' />
            <input
              className='password'
              type='password'
              placeholder='Password'
            />
          </div>
          <div className='signIn-button'>
            <a href='/' className='signIn'>
              SIGN IN
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;
