# 💬 ChatApp – Ứng dụng Chat Thời Gian Thực

Một ứng dụng chat hiện đại được xây dựng bằng **Spring Boot** và **React**, sử dụng **WebSocket** để nhắn tin thời gian thực. Giao diện hiện đại, xác thực bảo mật, hiệu năng mượt mà.

---

## 🚀 Tính năng

- ⚡ **Nhắn tin thời gian thực** với WebSocket (STOMP)
- 🧩 **Phòng chat riêng biệt** – Tạo và tham gia các phòng
- 🛡️ **Xác thực an toàn** – Tích hợp Spring Security
- 🗃️ **Lưu trữ dữ liệu với MongoDB**
- 📱 **Giao diện responsive** – Tương thích mọi thiết bị
- ⚙️ **Hỗ trợ hot reload** với Vite + Gradle cho trải nghiệm dev mượt mà

---

## 🛠️ Công nghệ sử dụng

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

## 📋 Yêu cầu cài đặt

| Công cụ    | Phiên bản yêu cầu        |
|------------|--------------------------|
| Java       | 21 trở lên               |
| Node.js    | 18 trở lên               |
| MongoDB    | Cài đặt local hoặc cloud |
| Git        | Bất kỳ phiên bản nào     |

---

## ⚙️ Cài đặt & Thiết lập

### 1. Clone Repository

```bash
git clone https://github.com/MinhDat1312/chat-app.git
cd chat-app
```

### 2. Cài đặt Backend

```bash
cd chat-app-backend

# Unix/Mac
./gradlew bootRun

# Windows
gradlew.bat bootRun
```

📍 Ứng dụng sẽ chạy tại `http://localhost:8080`

### 3. Cài đặt Frontend

```bash
cd ../chat-app-frontend

npm install
npm run dev
```

📍 Giao diện frontend sẽ chạy tại `http://localhost:5173`

---

## 🗄️ Cấu hình MongoDB

Chỉnh sửa file `application.properties`:

```properties
spring.data.mongodb.uri=mongodb://localhost:27017/chatapp
```

---

## 🧪 Hướng dẫn sử dụng

1. Chạy **server backend** bằng Spring Boot  
2. Chạy **server frontend** bằng Vite  
3. Mở trình duyệt và truy cập `http://localhost:5173`  
4. **Tạo hoặc tham gia phòng chat** và bắt đầu nhắn tin 🎉

---

## 📁 Cấu trúc dự án

```
chat-app/
├── chat-app-backend/
│   ├── controller/              # REST & WebSocket endpoint
│   ├── config/                  # Cấu hình bảo mật & WebSocket
│   ├── dto/                     # DTO classes
│   ├── entity/                  # Mô hình MongoDB
│   ├── repository/              # Repository
│   └── application.properties   # Cấu hình ứng dụng
├── chat-app-frontend/
│   ├── components/              # Các thành phần UI
│   ├── pages/                   # Các trang chính
│   ├── context/                 # State context
│   ├── services/                # Gọi API
│   ├── config/                  # Cấu hình Axios, init...
│   ├── routes/                  # Routing
│   └── main.jsx / App.jsx / index.css
```

---

## 📦 Triển khai (Deployment)

### 🌐 Frontend – Netlify

- 🚀 Triển khai tại:  
  [https://chat-app-05cdf0.netlify.app/](https://chat-app-05cdf0.netlify.app/)

- 🛠 Công cụ: **Netlify**
- 🧬 Triển khai tự động khi push GitHub (nhánh `main`)

> ✅ Tốc độ tải nhanh, hỗ trợ CDN & HTTPS mặc định

---

### 🖥️ Backend – Render

- 🔗 API hoạt động tại:  
  [https://chat-app-latest-rcql.onrender.com](https://chat-app-latest-rcql.onrender.com)

- 🛠 Công cụ: **Render**
- 🔁 Tự động deploy khi push GitHub
- 🗄️ Sử dụng MongoDB Atlas (hoặc local)

> ⏳ Gói miễn phí Render có thể bị “khởi động chậm” ~30 giây sau khi không hoạt động

---

### 🔧 Kết nối API trong frontend

```js
// AxiosHelper.js hoặc file .env
export const BASE_API = "https://chat-app-latest-rcql.onrender.com";
const socket = new SockJS(`${BASE_API}/ws`);
```

---

## 🐳 Hỗ trợ Docker

```bash
cd chat-app-backend

# Build Docker image
docker build -t chat-app-backend .

# Chạy container
docker run -p 8080:8080 chat-app-backend
```

---

## 🧑‍💻 Phát triển

| Tác vụ            | Lệnh                     |
|-------------------|--------------------------|
| Khởi động Backend | `./gradlew bootRun`      |
| Khởi động Frontend| `npm run dev`            |
| Build Backend     | `./gradlew build`        |
| Build Frontend    | `npm run build`          |

---

## 📞 Liên hệ

- 📧 Email: [nguyenthangdat84@gmail.com](mailto:nguyenthangdat84@gmail.com)  
- 🐙 GitHub: [github.com/MinhDat1312](https://github.com/MinhDat1312)  
- 🌐 Facebook: [fb.com/MinhDat](https://www.facebook.com/minh.at.784106)  
- 📸 Instagram: [instagram.com/MinhDat](https://www.instagram.com/ntmdat1312)  
- 💼 LinkedIn: [linkedin.com/in/MinhDat](https://www.linkedin.com/in/minh-%C4%91%E1%BA%A1t-14b018263)

---
