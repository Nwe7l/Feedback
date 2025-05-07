const express = require('express');
const cors = require('cors');
const { Configuration, OpenAIApi } = require('openai');

const app = express();
app.use(cors());
app.use(express.json());

const configuration = new Configuration({
  apiKey: 'YOUR_OPENAI_API_KEY' // Replace with your OpenAI API key
});
const openai = new OpenAIApi(configuration);

app.post('/api/ask', async (req, res) => {
  const prompt = req.body.prompt;
  const completion = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: prompt }]
  });
  const reply = completion.data.choices[0].message.content;
  res.json({ reply });
});

app.listen(3000, () => console.log('Voicebot server running on http://localhost:3000'));
