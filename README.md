🍔 Zomato Clone – MERN Stack Backend

A scalable backend for a Zomato-like food delivery platform built using the MERN stack.
The application supports JWT-based authentication, role-based authorization, protected APIs, and image uploads using Multer + ImageKit CDN.

🚀 Features
👤 Users

Secure registration & login

JWT-based authentication

Protected routes

Logout support

🏪 Food Partners

Role-based authentication

Protected API endpoints

Add food items with image upload

Authorization enforced via middleware

🛡️ Security & Middleware

JWT authentication middleware

Role-based authorization (User / Food Partner)

Protected routes for sensitive operations

Centralized middleware architecture

🖼️ Image Upload & Media Handling

Multer for handling multipart/form-data

ImageKit for cloud storage and CDN delivery

Food images uploaded securely by authorized food partners

Image URLs stored in MongoDB

🧰 Tech Stack
Backend

Node.js

Express.js

MongoDB

Mongoose

JWT Authentication

Multer

ImageKit

dotenv

Tools

Postman (API testing)

Nodemon (development)

Git & GitHub

📁 Project Structure
backend/
│
├── src/
│   ├── controllers/
│   │   ├── auth.controller.js
│   │   └── food.controller.js
│   │
│   ├── routes/
│   │   ├── auth.route.js
│   │   └── food.route.js
│   │
│   ├── middleware/
│   │   ├── auth.middleware.js
│   │   └── upload.middleware.js
│   │
│   ├── models/
│   │   ├── user.model.js
│   │   └── food.model.js
│   │
│   ├── config/
│   │   ├── db.js
│   │   └── imagekit.js
│   │
│   └── app.js
│
├── .env
├── package.json
└── server.js

🔐 Authentication & Authorization Flow

User / Food Partner logs in

JWT token is generated

Token is sent in the Authorization header

Middleware validates:

Token authenticity

User role

Access granted or denied accordingly

🛠️ Installation & Setup
git clone https://github.com/your-username/zomato-mern-backend.git
cd backend
npm install
npm run dev


Server runs at:

http://localhost:5000
