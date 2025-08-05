# 🔐 Firebase Login App (Next.js + Firebase Auth)

A simple, secure and modern authentication system built with **Next.js 15**, **Firebase Authentication**, and **Tailwind CSS**. It allows users to **sign up**, **log in**, and be greeted on the **home page** with their full name.

---

## ✨ Features

- 🔥 Firebase Authentication (Email + Password)
- 📦 Environment-based config via `.env.local`
- 🧠 Inline form validation with helpful error messages
- 💅 Beautiful UI with TailwindCSS
- ✅ Safe Firebase initialization with `getApps()` check
- ⚡ Smooth page transitions using Next.js routing

---

## 📸 Screenshots

### 🖼️ Login Page

> User enters email and password to log in.

<img width="1510" height="869" alt="image" src="https://github.com/user-attachments/assets/3d29238e-7daf-41d6-b9f3-7d85038695a1" />

## 🖼️ Required Fields Validation

> User is prompted to enter valid details.
<img width="1512" height="870" alt="image" src="https://github.com/user-attachments/assets/e5b2d3cf-c7ed-495d-8de3-659619afe831" />

---

### 🖼️ Signup Page

> User signs up with full name, email, and password.

<img width="1512" height="867" alt="image" src="https://github.com/user-attachments/assets/18eae9cf-6d62-4a63-b56b-48d7cb6fa993" />

## 🖼️ Required Fields Validation

> User is prompted to enter valid details.

<img width="1512" height="871" alt="image" src="https://github.com/user-attachments/assets/46c6c4a8-8e89-4c28-8b0e-8d0556a03fc8" />

---

### 🖼️ Home Page

> After logging in, the user is greeted with their name and a logout button.

<img width="1512" height="867" alt="image" src="https://github.com/user-attachments/assets/5e61a554-43f1-4b40-9771-5db47a5e3604" />


---

## 🛠️ Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/firebase-login-app.git
cd firebase-login-app
```
This project uses environment variables stored in .env.local to securely load your Firebase credentials.

### 2. Create .env.local
```bash
Copy
cp .env.example .env.local
```
Then open .env.local and replace the placeholder values with your actual Firebase credentials.

You can find them in your Firebase Console:

Project Settings → General → Your Apps → Firebase SDK snippet

✍️ Example .env.local format
env
```bash
# Firebase Web App Config (replace with real values)

NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_firebase_app_id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id  # optional
```
✅ These are loaded automatically by Next.js and used in firebase.js.

🧼 Reminder:
Make sure .env.local is:

✅ Placed in the project root

✅ NOT committed to GitHub (it's ignored by .gitignore)

✅ Followed by restarting the dev server:

```bash
npm run dev
```
