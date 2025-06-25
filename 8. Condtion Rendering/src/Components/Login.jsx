import React, { useState } from 'react';

const Login = ({ onToggle }) => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  const handleChange = e => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert('✅ Login Successful!');
    setLoginData({ email: '', password: '' });
  };

  return (
    <div className="form-box">
      <h2>Welcome Back</h2>
      <form onSubmit={handleSubmit}>
        <input name="email" type="email" placeholder="Email" value={loginData.email} onChange={handleChange} required />
        <input name="password" type="password" placeholder="Password" value={loginData.password} onChange={handleChange} required />
        <button type="submit">Login</button>
        <span className="toggle-link" onClick={onToggle}>Don't have an account?</span>
      </form>
    </div>
  );
};

export default Login;