const input = document.getElementById('input');
const output = document.getElementById('output');

const API_KEY = 'YOUR_OPENAI_API_KEY';  // Replace with your actual key

let story = "You wake up in a forest.\n";

input.addEventListener('keydown', async (e) => {
  if (e.key === 'Enter') {
    const userInput = input.value.trim();
    if (!userInput) return;

    story += `\n>> ${userInput}\n`;
    output.textContent = story;
    input.value = '';

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: 'You are an AI game master in a text-based adventure.' },
          { role: 'user', content: story }
        ],
        temperature: 0.8
      })
    });

    const data = await response.json();
    const reply = data.choices[0].message.content;

    story += reply + '\n';
    output.textContent = story;
  }
});
