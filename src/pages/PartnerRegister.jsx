import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/auth.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PartnerRegister = () =>  {
  const navigate = useNavigate();
  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const businessName = e.target.businessName.value;
    const contactName = e.target.contactName.value;
    const phone = e.target.phone.value;
    const address = e.target.address.value;
    const contactEmail = e.target.contactEmail.value;
    const password = e.target.password.value;

    const response = await axios.post("http://localhost:3000/api/auth/foodpartner/register", {
      fullName: businessName,
      contactName: contactName,
      phoneNumber: phone,
      address: address,
      email: contactEmail,
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
            <h1>Partner sign up</h1>
            <div className="lead">Register your restaurant or kitchen</div>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '0.6rem', justifyContent: 'center', marginBottom: '0.8rem' }}>
          <Link to="/user/register" className="btn" style={{ textDecoration: 'none' }}>Register as User</Link>
        </div>

        <form aria-label="partner-register-form" onSubmit={handleOnSubmit}>
          <div className="form-group">
            <label htmlFor="businessName">Business name</label>
            <input id="businessName" name="businessName" placeholder="My Tasty Kitchen" />
          </div>

          <div className="form-group">
            <label htmlFor="contactName">Contact name</label>
            <input id="contactName" name="contactName" placeholder="Owner name" />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="phone">Phone number</label>
              <input id="phone" name="phone" type="tel" placeholder="+1 555 555 5555" />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input id="address" name="address" placeholder="123 Market St, City" />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="contactEmail">Email</label>
            <input id="contactEmail" name="contactEmail" type="email" placeholder="owner@example.com" />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input id="password" name="password" type="password" placeholder="••••••••" />
          </div>

          <div className="actions">
            <Link to="/food-partner/login" className="muted-link">Already registered?</Link>
            <button className="btn" type="submit">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PartnerRegister;
