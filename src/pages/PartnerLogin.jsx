import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import '../styles/auth.css';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const PartnerLogin = () => {
  const navigate = useNavigate();
  const handleOnSubmit = async(e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    // Handle partner login logic here
    const response = await axios.post("http://localhost:3000/api/auth/foodpartner/login", {
      email: email,
      password: password
    }, {
      withCredentials: true
    });

    navigate("/create-food")
  }
  return (
    <div className="auth-container">
      <div className="card">
        <div className="auth-header">
          <div className="brand">P</div>
          <div>
            <h1>Partner sign in</h1>
            <div className="lead">Access your partner dashboard</div>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '0.6rem', justifyContent: 'center', marginBottom: '0.8rem' }}>
          <Link to="/user/register" className="btn" style={{ textDecoration: 'none' }}>Register as User</Link>
        </div>

        <form aria-label="partner-login-form" onSubmit={handleOnSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" placeholder="owner@example.com" />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input id="password" name="password" type="password" placeholder="••••••••" />
          </div>

          <div className="actions">
            <a className="muted-link" href="#">Need help?</a>
            <button className="btn" type="submit">Sign in</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PartnerLogin;