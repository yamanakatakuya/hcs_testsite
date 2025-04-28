const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Temporary in-memory store
const users = [];

// Register route: saves user
app.post('/register', (req, res) => {
  const { name, email, country, affiliation, username, password } = req.body;

  // Store user data
  users.push({ username, password });
  console.log('Registered Users:', users);

  res.json({ success: true });
});

// Login route: checks stored users
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Find matching user
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

// Submit route: just dummy response for now
app.post('/submit', (req, res) => {
  const { data } = req.body;
  console.log('Data submitted:', data);
  res.json({ success: true });
});

// Render's dynamic port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
