# 💬 ChatApp – Real-time Chat Application

A modern, real-time chat app built with **Spring Boot** and **React**, using **WebSocket** for instant communication. Clean UI, secure auth, and seamless performance.

---

## 🚀 Features

- ⚡ **Instant messaging** with WebSocket (STOMP)
- 🧩 **Room-based chats** – Create & join chat rooms
- 🛡️ **Secure authentication** – Spring Security integrated
- 🗃️ **MongoDB** for data persistence
- 📱 **Responsive UI** – Works great on all devices
- ⚙️ **Hot reload** with Vite + Gradle for smooth dev experience

---

## 🛠️ Tech Stack

### 🔙 Backend

- Java 21
- Spring Boot 3.5.3
- Spring WebSocket + STOMP
- Spring Security
- MongoDB
- Lombok

### 🔜 Frontend

- React 19
- Vite
- Tailwind CSS
- Axios
- STOMP.js
- React Router
- React Hot Toast

---

## 📋 Prerequisites

| Tool    | Required Version     |
| ------- | -------------------- |
| Java    | 21+                  |
| Node.js | 18+                  |
| MongoDB | Local/cloud instance |
| Git     | Any version          |

---

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/MinhDat1312/chat-app.git
cd chat-app
```

### 2. Backend Setup

```bash
cd chat-app-backend

# Unix/Mac
./gradlew bootRun

# Windows
gradlew.bat bootRun
```

📍 App runs on `http://localhost:8080`

### 3. Frontend Setup

```bash
cd ../chat-app-frontend

npm install
npm run dev
```

📍 Frontend runs on `http://localhost:5173`

---

## 🗄️ MongoDB Configuration

Edit `application.properties`:

```properties
spring.data.mongodb.uri=mongodb://localhost:27017/chatapp
```

---

## 🧪 Usage Guide

1. Start **backend server** with Spring Boot
2. Start **frontend server** with Vite
3. Visit `http://localhost:5173`
4. **Create or join a room** and start chatting in real-time 🎉

---

## 📁 Project Structure Overview

```
chat-app/
├── chat-app-backend/
│   ├── src/main/java/.../controller/      # REST & WebSocket endpoints
│   ├── src/main/java/.../config/          # Security & WebSocket config
│   ├── src/main/java/.../dto/             # DTO classes
│   ├── src/main/java/.../entity/          # MongoDB document models
│   ├── src/main/java/.../repository/      # Mongo repositories
│   └── application.properties
├── chat-app-frontend/
│   ├── src/components/                    # UI components
│   ├── src/pages/                         # Home / Chat pages
│   ├── src/context/                       # Context API
│   ├── src/services/                      # Axios-based API calls
│   ├── src/config/                        # Axios / init configs
│   ├── src/routes/                        # Routing setup
│   └── main.jsx / App.jsx / index.css
```

---

## 📦 Deployment

### 🌐 Frontend – Netlify

- 🚀 https://chat-app-05cdf0.netlify.app/
- **Deploy tool**: Netlify
- **Branch deploy**: `main`
- **Continuous Deployment**: Auto-deploy on every GitHub push

> ✅ Fast loading with optimized CDN and built-in SSL (HTTPS)

### 🖥️ Backend – Render

- 🔗 https://chat-app-latest-rcql.onrender.com
- **Deploy tool**: Render
- **Auto-deploy**: Auto-deploy on every GitHub push
- **Database**: Connect to MongoDB Atlas (or local)

> ⏳ Render may experience ~30s cold starts when using the free tier.

### 🔧 Important: Connection Configuration

```js
// AxiosHelper.js or .env
export const BASE_API = "https://chat-app-latest-rcql.onrender.com";
const socket = new SockJS(`${BASE_API}/ws`);
```

---

## 🐳 Docker Support

```bash
cd chat-app-backend

# Build image
docker build -t chat-app-backend .

# Run container
docker run -p 8080:8080 chat-app-backend
```

---

## 🧑‍💻 Development

| Task           | Command             |
| -------------- | ------------------- |
| Start Backend  | `./gradlew bootRun` |
| Start Frontend | `npm run dev`       |
| Build Backend  | `./gradlew build`   |
| Build Frontend | `npm run build`     |

---

## 📞 Contact

- 📧 Email: [nguyenthangdat84@gmail.com](mailto:nguyenthangdat84@gmail.com)
- 🐙 GitHub: [github.com/MinhDat1312](https://github.com/MinhDat1312)

---
