# 🧑‍💻 Frontend README  
Place this in: `chatbot-app/frontend/README.md`

```markdown
# 💬 AI Chatbot – Frontend (React)

A modern, responsive chat interface built with **React**, designed to work with an AI-powered backend.  
Supports real-time message rendering, typing indicators, and Markdown-formatted responses from the AI model.

---

## 🔧 Tech Stack

- **Framework**: React
- **Styling**: CSS
- **HTTP Client**: Axios
- **Markdown Rendering**: ReactMarkdown

---

## 🚀 How to Run

### 1. Install Dependencies

```bash
npm install
```

### 2. Start Development Server

```bash
npm start
```

The app will run at: [http://localhost:3000](http://localhost:3000)  
Make sure the **backend is running on port 5001** before starting the frontend.

---

## 📦 Features

- ✅ Responsive chat UI
- ✅ Typing indicator while waiting for AI response
- ✅ Markdown rendering for rich-formatted replies
- ✅ Message bubbles for user and bot
- ✅ Keyboard "Enter" to send message

---

## 🌐 API Integration

Sends requests to:

```js
POST http://localhost:5001/chat
```

Example request:
```json
{
  "message": "What is quantum computing?"
}
```

---

## 📁 Project Structure

```
frontend/
├── public/
│   └── index.html
├── src/
│   ├── App.js
│   ├── index.js
│   └── components/
├── package.json
└── README.md
```

---

## 📄 License

MIT License – see [`LICENSE`](../LICENSE) for details.
```

---

# 🛠️ Backend README  
Place this in: `chatbot-app/backend/README.md`

```markdown
# ⚙️ AI Chatbot – Backend (Node.js + Express)

A secure and scalable backend service for connecting a React frontend to an AI language model (LLM), such as GPT-4 via OpenRouter.

---

## 🔧 Tech Stack

- **Runtime**: Node.js
- **Framework**: Express
- **HTTP Client**: Axios
- **Security**: dotenv, CORS middleware

---

## 🚀 How to Run

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Environment Variables

Create a `.env` file:

```env
OPENROUTER_API_KEY=your_openrouter_api_key_here
PORT=5001
```

You can get your key at: [https://openrouter.ai/keys](https://openrouter.ai/keys)

### 3. Start the Server

```bash
node server.js
```

API will be available at: [http://localhost:5001/chat](http://localhost:5001/chat)

---

## 🌐 API Endpoint

### POST `/chat`

**Request Body**
```json
{
  "message": "Explain how gravity works."
}
```

**Response**
```json
{
  "reply": "Gravity is a force that attracts objects with mass..."
}
```

---

## 📦 Features

- ✅ Secure handling of API keys
- ✅ Proxy for AI model APIs
- ✅ CORS configured for local frontend development
- ✅ Easily extendable to support history tracking or multi-model routing

---

## 📁 Project Structure

```
backend/
├── server.js
├── package.json
└── .env
```

---

## 📝 Contributing

Contributions are welcome!  
If you'd like to enhance the backend logic or integrate additional AI providers, feel free to open a PR or issue.

---

## 📄 License

MIT License – see [`LICENSE`](../LICENSE) for details.
```
