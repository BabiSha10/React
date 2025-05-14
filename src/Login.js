import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email: ${email}\nPassword: ${password}`);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <form onSubmit={handleSubmit} className="login-form">
          <h2>Login</h2>
          <div className="signup-line">
  <p>Doesn't have an account yet? <a href="#">Sign Up</a></p>
</div>

          <label>Email Address</label>
          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

<div className="forgot-line">
  <label>
    Password <a href="#" className="forgot">Forgot Password?</a>
  </label>
</div>

          <input
            type="password"
            placeholder="Enter 6 character or more"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className="remember-me">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember me</label>
          </div>

          <button type="submit" className="login-btn">Login</button>

          <p className="or">or login with</p>
          <div className="social-login">
            <button className="google">Google</button>
            <button className="facebook">Facebook</button>
          </div>
        </form>

        <div className="illustration">
          <img
            src="https://media.istockphoto.com/id/1370433251/photo/black-woman-sitting-at-desk-using-computer-writing-in-notebook.jpg?s=612x612&w=0&k=20&c=rHpy3cX4LVFtzLI4gyy0T-fNYdTeAcdNQgTmy9maAIA="
            alt="Login Illustration"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
