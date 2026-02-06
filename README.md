# Experiences Booking Backend API

Backend assignment project built using **Node.js + TypeScript + Express + PostgreSQL**.

Implements authentication, RBAC, experiences management, and booking system.

---

## 🚀 Tech Stack

- Node.js
- TypeScript
- Express
- PostgreSQL
- JWT Authentication
- bcrypt password hashing

---

## 📦 Setup Instructions

### 1. Install dependencies
npm install

### 2. Create PostgreSQL database
CREATE DATABASE experiences;

### 3. Add environment variables (.env)

Create `.env` file:

PORT=5000
DATABASE_URL=postgres://postgres:password@localhost:5432/experiences
JWT_SECRET=secret

### 4. Run server
npm run dev

Server runs at:
http://localhost:5000

---

## 👥 Roles

### User
- View experiences
- Book seats

### Host
- Create experiences
- Publish experiences

### Admin
- Block experiences (moderation)

---

## 📌 API Endpoints

### Auth
POST   /auth/signup  
POST   /auth/login  

### Experiences
POST   /experiences (host/admin)  
PATCH  /experiences/:id/publish  
PATCH  /experiences/:id/block  
GET    /experiences  

### Bookings
POST   /bookings/:id  

### System
GET    /health  

---

## 🧪 Test Flow (Postman)

1. Login host  
2. Create experience  
3. Publish  
4. Login user  
5. Book seats  
6. Login admin  
7. Block experience  

---

## 📁 Project Structure

src/
 ├─ routes/
 ├─ middlewares/
 ├─ db/
 ├─ app.ts
 └─ server.ts

---

## ✅ Features Implemented

✔ JWT authentication  
✔ Role Based Access Control (RBAC)  
✔ Host create & publish  
✔ Admin block  
✔ Booking system  
✔ Validations  
✔ Health endpoint  
✔ PostgreSQL schema  

---

## 👨‍💻 Author
Backend Developer Assignment Submission
