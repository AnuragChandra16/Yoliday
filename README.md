# Experiences Booking Backend API

Backend assignment project built using **Node.js + TypeScript + Express + PostgreSQL**.

This system allows:
- User authentication (JWT)
- Role Based Access Control (RBAC)
- Hosts to create & publish experiences
- Users to book experiences
- Admin to moderate/block experiences

---

## 🚀 Tech Stack

- Node.js
- TypeScript
- Express.js
- PostgreSQL
- JWT Authentication
- bcrypt password hashing

---

## ⚡ Quick Start (For Reviewer / Interviewer)

Follow these steps to run the project locally:

### 1️⃣ Clone repository
git clone <repo-url>
cd Yoliday

### 2️⃣ Install dependencies
npm install

### 3️⃣ Create PostgreSQL database
Open pgAdmin or psql and run:
CREATE DATABASE experiences;

### 4️⃣ Run database schema
psql -d experiences -f schema.sql

(OR copy schema.sql into pgAdmin Query Tool and run)

### 5️⃣ Setup environment variables
Copy:
.env.example → .env

Then edit .env:

PORT=5000
DATABASE_URL=postgres://postgres:password@localhost:5432/experiences
JWT_SECRET=secret

### 6️⃣ Start server
npm run dev

Server runs at:
http://localhost:5000

---

## 👥 Roles & Permissions

### User
- View published experiences
- Book seats

### Host
- Create experiences (draft)
- Publish experiences

### Admin
- Block experiences (moderation)

---

## 📌 API Endpoints

### 🔐 Auth
POST   /auth/signup  
POST   /auth/login  

### 🎯 Experiences
POST   /experiences              (host/admin)  
PATCH  /experiences/:id/publish  (host/admin)  
PATCH  /experiences/:id/block    (admin)  
GET    /experiences              (public)  

### 🎟 Bookings
POST   /bookings/:id             (user)  

### ❤️ Health
GET    /health  

---

## 🧪 Example API Requests (Postman)

### Host flow

Create host:
POST /auth/signup
{
  "email": "host@test.com",
  "password": "123456",
  "role": "host"
}

Login:
POST /auth/login

Create experience:
POST /experiences
Authorization: Bearer HOST_TOKEN
{
  "title": "Goa Trip",
  "location": "Goa",
  "price": 2000
}

Publish:
PATCH /experiences/1/publish
Authorization: Bearer HOST_TOKEN


---

### User flow

Signup + login:
POST /auth/signup
POST /auth/login

Book:
POST /bookings/1
Authorization: Bearer USER_TOKEN
{
  "seats": 2
}


---

### Admin flow

Signup + login:
POST /auth/signup
(role = admin)

Block:
PATCH /experiences/1/block
Authorization: Bearer ADMIN_TOKEN


---

## 📁 Project Structure

src/
 ├─ routes/
 ├─ middlewares/
 ├─ db/
 ├─ app.ts
 └─ server.ts

Root/
 ├─ schema.sql
 ├─ .env.example
 ├─ README.md
 ├─ package.json
 └─ tsconfig.json

---

## 🗄 Database Tables

- users
- experiences
- bookings

Schema provided in:
schema.sql

---

## ✅ Features Implemented

✔ JWT authentication  
✔ Password hashing (bcrypt)  
✔ Role Based Access Control (RBAC)  
✔ Host create + publish  
✔ Admin block  
✔ Booking system  
✔ Duplicate booking prevention  
✔ Input validations  
✔ Health endpoint  
✔ PostgreSQL schema setup  

---

## 👨‍💻 Author

Anurag Chandra  
Backend Developer Assignment Submission
