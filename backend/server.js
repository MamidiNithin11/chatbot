// backend/server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(bodyParser.json());

const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;


app.post('/chat', async (req, res) => {
  const userMessage = req.body.message;

  try {
    const response = await axios.post(
      'https://openrouter.ai/api/v1/chat/completions', 
      {
        model:"deepseek/deepseek-r1-distill-qwen-7b",
        messages: [{ role: 'user', content: userMessage }],
      },
      {
        headers: {
          Authorization: `Bearer ${OPENROUTER_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    const aiReply = response.data.choices[0].message.content;
    console.log('AI Reply:', aiReply);
    res.json({ reply: aiReply });
  } catch (error) {
    console.error('Error calling AI:', error.response?.data || error.message);
    res.status(500).json({ reply: 'Error contacting AI service.' });
  }
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});