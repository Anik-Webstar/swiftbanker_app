# SwiftBanker - MERN Stack E-Banking Application
SwiftBanker is a secure e-banking platform developed using the MERN stack (MongoDB, Express.js, React.js, Node.js). It allows users to register, log in, check their account balance, transfer funds, and view transaction history.

---

## Technologies Used

- **MongoDB** – Database for storing user and transaction data.
- **Express.js** – Backend framework for handling server-side logic and API routes.
- **React.js (with Vite)** – Frontend library for building user interfaces.
- **Node.js** – JavaScript runtime environment for executing backend code.
- **JWT (JSON Web Token)** – Used for user authentication and authorization.
- **Axios** – Promise-based HTTP client for communicating with the backend.

---

## Folder Structure

swiftbanker_app/
├── SwiftBanker-Backend/
│ ├── config/
│ ├── controllers/
│ ├── middleware/
│ ├── models/
│ ├── routes/
│ ├── .env
│ ├── .gitignore
│ └── server.js
├── SwiftBanker-Frontend/
│ └── vite-project/
│ ├── public/
│ ├── src/
│ ├── index.html
│ ├── package.json
│ ├── .gitignore
│ └── vite.config.js

---

## Features

- User registration with automatic bank account creation
- User login with JWT-based authentication
- View current account balance
- Transfer funds between accounts
- View detailed transaction history
- Responsive and functional user interface

---

## Getting Started

### 1. Clone the Repository
git clone https://github.com/Anik-Webstar/swiftbanker_app.git
cd swiftbanker_app
### 2. Backend Setup
cd SwiftBanker-Backend
npm install
Create a .env file in the root of the SwiftBanker-Backend directory with the following content:
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
Start the backend server:
npm start
### 3. Frontend Setup
cd SwiftBanker-Frontend/vite-project
npm install
npm run dev
Access the application in your browser at: http://localhost:5173

## Project Author
Aniket Sengupta
B.Tech in Electronics and Communication Engineering
Birla Institute of Technology, Mesra
GitHub: Anik-Webstar

## License
This project is intended for educational and academic demonstration purposes.
