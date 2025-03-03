Restaurant Management System (MERN Stack)

📌 Project Overview

The Restaurant Management System is a full-stack web application built using the MERN (MongoDB, Express.js, React, Node.js) stack. It enables restaurant owners to manage their business efficiently by handling restaurant menus.

🚀 Features

🔹 User Authentication (JWT-based login & registration)

🔹 Restaurant Management (Add/Edit/Delete restaurant details)

🔹 More to come...

🔹 Mobile-Friendly UI (Responsive React frontend)

🛠️ Tech Stack

Frontend (React)

React.js – UI Development

Axios – API Requests

Backend (Node.js + Express.js)

Node.js – Server-side runtime

Express.js – Backend framework

JWT Authentication – Secure authentication

MongoDB + Mongoose – Database management

Bcrypt.js – Password hashing

Database

MongoDB – NoSQL database

🔧 Installation & Setup

1️⃣ Clone the Repository

git clone https://github.com/shuchitamathur28/mern-restaurant-management.git
cd mern-restaurant-management

2️⃣ Install Backend Dependencies

cd backend
npm install

3️⃣ Install Frontend Dependencies

cd ../frontend
npm install

4️⃣ Configure Environment Variables

Create a .env file in the backend folder and add:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
STRIPE_SECRET=your_stripe_secret_key

5️⃣ Start the Backend Server

cd backend
npm run dev

6️⃣ Start the Frontend Server

cd ../frontend
npm start

7️⃣ Open in Browser

Visit http://localhost:3000 to access the application.
