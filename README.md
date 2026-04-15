# 🛠 Smart Complaint Management System

A full-stack web application that allows users to register complaints and track their status, while admins can manage and resolve them efficiently.

---

## 🚀 Tech Stack

### Frontend

* React (Vite)
* Tailwind CSS
* DaisyUI

### Backend

* Spring Boot
* REST APIs

### Database

* H2 (Development) / MySQL (Production)

### Tools

* Postman
* VS Code

---

## ✨ Features

### 👤 User

* Register & Login
* Create Complaint
* View Complaint Status

### 🛡 Admin

* Admin Login
* View All Complaints
* Update Complaint Status (OPEN, IN_PROGRESS, RESOLVED)

---


## 📂 Project Structure

```bash
Smart_Complaint_System/
│
├── Frontend/ (React)
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── services/
│   │   └── App.jsx
│
├── Backend/ (Spring Boot)
│   ├── controller/
│   ├── service/
│   ├── repository/
│   ├── model/
│   └── application.properties
```


---

## ⚙️ How to Run

### 🔹 1. Clone Repository

git clone https://github.com/reddy-gowthami/smart-complaint-system.git
cd smart-complaint-system

---

### 🔹 2. Run Frontend

cd Frontend
npm install
npm run dev

👉 Runs on: http://localhost:5173

---

### 🔹 3. Run Backend

cd Backend
mvn spring-boot:run

👉 Runs on: http://localhost:8080

---

## 🔗 API Endpoints

POST /register → Register user
POST /login → Login user
POST /complaints → Create complaint
GET /complaints → Get all complaints
GET /complaints/user/{id} → Get user complaints
PUT /complaints/{id} → Update complaint status

---

## 📸 Screenshots

(Add your screenshots here)

Example:

* Login Page
 <img width="1920" height="1008" alt="Screenshot 2026-04-07 093044" src="https://github.com/user-attachments/assets/c0f3223c-dcfb-4c95-bba6-3fa55ba25579" />

* Register Page
 <img width="1920" height="1008" alt="Screenshot 2026-04-07 093059" src="https://github.com/user-attachments/assets/e091eba2-fab6-4de6-aca4-67b871cf3c33" />

* User Dashboard
 <img width="1920" height="1008" alt="Screenshot 2026-04-07 093129" src="https://github.com/user-attachments/assets/b14208b9-2ea6-45fb-a32b-4e0e1b076505" />

* Admin Dashboard
 <img width="1911" height="1014" alt="Screenshot 2026-04-07 093020" src="https://github.com/user-attachments/assets/ea548149-b61f-4538-9ead-faa93d6e4a44" />


---

## 🧪 Testing

Use Postman to test APIs:

* Register
* Login
* Complaint APIs

---

## ⚠️ Important Notes

* Table name should be **users** (not `user`) to avoid SQL errors
* Admin role must be **"ADMIN"** (case-sensitive)

---

## 🔮 Future Enhancements

* JWT Authentication 🔐
* Email Notifications 📧
* File Upload 📎
* Complaint Categories 📂
* Real-time Updates ⚡

---

## 👩‍💻 Author

Gowthami Reddy
B.Tech CSE | Full Stack Developer

---

## ⭐ Acknowledgement

This project was built as a full-stack learning project using modern web technologies.
