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
PATCH  /experiences/:i
