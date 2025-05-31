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

## 📝 Contributing

Contributions are welcome!  
If you'd like to improve or extend this UI, feel free to open a PR or issue.

---

## 📄 License

MIT License – see [`LICENSE`](../LICENSE) for details.
```

---

## 🛠️ Backend README (Markdown)

```markdown
# ⚙️ AI Chatbot – Backend (Node.js + Express)

A secure and lightweight backend service for connecting a React frontend to an AI language model (LLM), such as GPT-4 via OpenRouter.

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
