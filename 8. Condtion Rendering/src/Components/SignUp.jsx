import React, { useState } from 'react';

const SignUp = ({ onToggle }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert('✅ Signup Successful!');
    setFormData({ username: '', email: '', password: '' });
  };

  return (
    <div className="form-box">
      <h2>Create Account</h2>
      <form onSubmit={handleSubmit}>
        <input name="username" type="text" placeholder="Username" value={formData.username} onChange={handleChange} required />
        <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input name="password" type="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
        <button type="submit">Sign Up</button>
        <span className="toggle-link" onClick={onToggle}>Already have an account?</span>
      </form>
    </div>
  );
};

export default SignUp;