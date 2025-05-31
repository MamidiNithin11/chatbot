import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');

    try {
      const res = await axios.post('http://localhost:5001/chat', { message: input });
      const botMsg = { role: 'bot', content: res.data.reply };
      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { role: 'bot', content: 'Failed to get response from AI.' },
      ]);
    }
  };

  return (
  <div className="app-container">
   <h2 className='heading'>AI ChatBot</h2>
    <div className="chat-container">
     
      <div className="chat-box">
        {messages.map((msg, i) => (
          <div key={i} className={`message ${msg.role}`}>
            {msg.content}
          </div>
        ))}
      </div>
      <div className="input-area">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
          className="input-field"
        />
        <button onClick={sendMessage} className="button">Send</button>
      </div>
    </div>
    </div>
  );
}

export default App;