import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './style.auth.scss';

const Register = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const handleSignUpClick = () => {
    setIsSignIn(false);
  };

  const handleSignInClick = () => {
    setIsSignIn(true);
  };

  return (
    <section className='form'>
      <div className={`wrapper ${isSignIn ? 'animate-signIn' : 'animate-signUp'}`}>
        {isSignIn ? (
          <div className="form-wrapper sign-in">
            <form action="">
              <h2>Login</h2>
              <div className="input-group">
                <input type="text" required />
                <label>Username</label>
              </div>
              <div className="input-group">
                <input type="password" required />
                <label>Password</label>
              </div>
              <div className="forgot-pass">
                <a href="#">Forgot Password?</a>
              </div>
              <button type="submit" className="btn">Login</button>
              <div className="sign-link">
                <p>Don't have an account? <NavLink to={'/dang-ky'} className="signUp-link" onClick={handleSignUpClick}>Sign Up</NavLink></p>
              </div>
            </form>
          </div>
        ) : (
            <div className="form-wrapper sign-up">
              <form action="">
                <h2>Sign Up</h2>
                <div className="input-group">
                  <input type="text" required />
                  <label>Username</label>
                </div>
                <div className="input-group">
                  <input type="email" required />
                  <label>Email</label>
                </div>
                <div className="input-group">
                  <input type="password" required />
                  <label>Password</label>
                </div>
                <button type="submit" className="btn">Sign Up</button>
                <div className="sign-link">
                  <p>Already have an account? <NavLink to={'/dang-nhap'} className="signIn-link" onClick={handleSignInClick}>Sign In</NavLink></p>
                </div>
              </form>
            </div>
          )}
      </div>
    </section>
  );
};

export default Register;
