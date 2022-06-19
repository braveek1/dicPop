import React, { Component } from 'react';
import LoginForm from './loginForm';
import '../css/login.css';
// import PropTypes from 'prop-types';

class Login extends Component {
  // constructor(props) {
  //   super(props);
  // }
  // componentWillMount() {}
  // componentDidMount() {}
  // componentWillReceiveProps(nextProps) {}
  // shouldComponentUpdate(nextProps, nextState) {}
  // componentWillUpdate(nextProps, nextState) {}
  // componentDidUpdate(prevProps, prevState) {}
  // componentWillUnmount() {}

  render() {
    return (
      <>
        <div className='login-container'>
          {/* photo-slider */}
          <div className='login-section'>
            <div className='photo-slider-container'>
              <div className='logo-article'>
                <div className='logo'></div>
                <div className='logo-title'>Meta</div>
              </div>
              <div className='slider'>
                <div className='slider-img'></div>
              </div>
              <div className='comment'>Metadata management solution</div>
            </div>
          </div>
          {/* login-form */}
          <div className='login-section'>
            <LoginForm></LoginForm>
          </div>
        </div>
      </>
    );
  }
}

Login.propTypes = {};

export default Login;
