import React, { use } from 'react';
import { Link } from 'react-router-dom';
import '../styles/auth.css';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const UserLogin = () => {
	const navigate = useNavigate();
	const handleOnSubmit = async(e) => {
		e.preventDefault();

		const email = e.target.email.value;
		const password = e.target.password.value;

		const response = await axios.post("http://localhost:3000/api/auth/user/login", {
			email: email,
			password: password}, 
			{
				withCredentials: true
			})

			navigate("/")
	};
	return (
		<div className="auth-container">
			<div className="card">
				<div className="auth-header">
					<div className="brand">U</div>
					<div>
						<h1>Welcome back</h1>
						<div className="lead">Sign in to your account</div>
					</div>
				</div>

				<div style={{ display: 'flex', gap: '0.6rem', justifyContent: 'center', marginBottom: '0.8rem' }}>
					<Link to="/food-partner/register" className="btn" style={{ textDecoration: 'none' }}>Register as Partner</Link>
				</div>

				<form aria-label="user-login-form" onSubmit={handleOnSubmit}>
					<div className="form-group">
						<label htmlFor="email">Email</label>
						<input id="email" name="email" type="email" placeholder="you@example.com" />
					</div>

					<div className="form-group">
						<label htmlFor="password">Password</label>
						<input id="password" name="password" type="password" placeholder="••••••••" />
					</div>

					<div className="actions">
						<a className="muted-link" href="#">Forgot password?</a>
						<button className="btn" type="submit">Sign in</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default UserLogin;

