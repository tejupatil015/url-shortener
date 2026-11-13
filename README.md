
# 🔗 URL Shortener

A URL Shortener Web Application that converts long URLs into short, easy-to-share links. Users can manage shortened URLs through a simple and user-friendly interface.

## 🚀 Features

- Convert long URLs into short URLs.
- Redirect users to the original URL.
- Store URL records in MySQL database.
- User authentication and login system.
- Manage shortened URLs.
- Backend API using Node.js and Express.js.
- Dynamic frontend using EJS.
- Secure environment variable configuration.

## 🛠️ Tech Stack

### Frontend
- HTML5
- CSS3
- JavaScript
- EJS

### Backend
- Node.js
- Express.js

### Database
- MySQL

### Tools
- VS Code
- Git & GitHub
- dotenv



## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone  tejupatil015/url-shortener

### 2. Navigate to project folder

```bash
cd url-shortener
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Create a `.env` file in the root directory.

```env
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=url_shortner
SESSION_SECRET=your_secret
```

### 5. Setup MySQL Database

Create the database:

```sql
CREATE DATABASE url_shortner;
```

Import the database structure from:

```text
database/schema.sql
```

### 6. Start the application

```bash
npm start
```

If your project uses nodemon:

```bash
npm run dev
```

Open your browser:

```text
http://localhost:5000
```

## 🔐 Environment Variables

Sensitive credentials are stored in `.env` and excluded from GitHub using `.gitignore`.

The `.env.example` file provides the required environment variable names.

## 📌 Future Improvements

- QR Code generation for shortened URLs.
- URL click analytics.
- Expiration dates for shortened links.
- Custom short URL aliases.
- Dashboard for URL management.

## 👩‍💻 Author

**Tejashri Patil**

Electronics and Telecommunication Engineering Student

GitHub: https://github.com/tejupatil015/url-shortener

---

⭐ If you find this project useful, consider giving it a star!
