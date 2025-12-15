import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/auth.css';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const UserRegister = () => {
  const navigate = useNavigate();
    const handleOnSubmit = async (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        const response = await axios.post("http://localhost:3000/api/auth/user/register", {
            fullName: name,
            email: email,
            password: password
        }, {
          withCredentials: true
        });
        navigate("/")
      };
  return (
    <div className="auth-container">
      <div className="card">
        <div className="auth-header">
          <div className="brand">U</div>
          <div>
            <h1>Create account</h1>
            <div className="lead">Register as a food consumer</div>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '0.6rem', justifyContent: 'center', marginBottom: '0.8rem' }}>
          <Link to="/food-partner/register" className="btn" style={{ textDecoration: 'none' }}>Register as Partner</Link>
        </div>

        <form aria-label="user-register-form" onSubmit={handleOnSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full name</label>
            <input id="name" name="name" placeholder="Jane Doe" />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" placeholder="you@example.com" />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input id="password" name="password" type="password" placeholder="••••••••" />
          </div>

          <div className="actions">
            <Link to="/user/login" className="muted-link">Already have an account?</Link>
            <button className="btn" type="submit">Create account</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserRegister;
