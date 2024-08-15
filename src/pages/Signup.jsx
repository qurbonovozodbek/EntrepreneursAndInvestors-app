import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../style/Signup.css'

function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    picture: null,
    email: '',
    password: '',
  });
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full Name is required.';
    } else if (!/^[a-zA-Z\s]+$/.test(formData.name)) {
      newErrors.name = 'Full Name should contain only letters and spaces.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone Number is required.';
    } else if (!/^\d{10,15}$/.test(formData.phone)) {
      newErrors.phone = 'Phone Number should be 10-15 digits long.';
    }

    if (!formData.picture) {
      newErrors.picture = 'Picture is required.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email Address is required.';
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
      newErrors.email = 'Invalid email format.';
    }

    if (!formData.password.trim()) {
      newErrors.password = 'Password is required.';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password should be at least 6 characters long.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'picture') {
      setFormData({ ...formData, picture: e.target.files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.find(user => user.email === formData.email);

    if (userExists) {
      setMessage('A user with this email already exists.');
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      const newUser = { 
        ...formData, 
        picture: reader.result 
      };
      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));
      setMessage('Registration successful! Redirecting...');
      setTimeout(() => {
        navigate('/');
      }, 1500);
    };
    reader.readAsDataURL(formData.picture);
  };

  return (
    <>
      <Header />
      <div className="signup-page">
        <div className="signup-container">
          <h1>Sign Up</h1>
          <form onSubmit={handleSubmit} className="signup-form">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`input ${errors.name ? 'input-error' : ''}`}
                required
              />
              {errors.name && <p className="error-text">{errors.name}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`input ${errors.phone ? 'input-error' : ''}`}
                required
              />
              {errors.phone && <p className="error-text">{errors.phone}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="picture">Upload Picture</label>
              <input
                type="file"
                id="picture"
                name="picture"
                accept="image/*"
                onChange={handleChange}
                className={`input ${errors.picture ? 'input-error' : ''}`}
                required
              />
              {errors.picture && <p className="error-text">{errors.picture}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`input ${errors.email ? 'input-error' : ''}`}
                required
              />
              {errors.email && <p className="error-text">{errors.email}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`input ${errors.password ? 'input-error' : ''}`}
                required
              />
              {errors.password && <p className="error-text">{errors.password}</p>}
            </div>
            <button type="submit" className="submit-button">
              Sign Up
            </button>
          </form>
          {message && <p className="message">{message}</p>}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Signup;
