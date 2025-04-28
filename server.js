const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  // Dummy login logic for now
  if (username === 'test' && password === '1234') {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

app.post('/register', (req, res) => {
  // Implement registration logic or dummy response
  res.json({ success: true });
});

app.post('/submit', (req, res) => {
  // Implement data submission logic or dummy response
  res.json({ success: true });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
