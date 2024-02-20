const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001; // Use a different port than your React app

app.use(cors({
      origin: 'http://localhost:5137',
      credentials: true,      
    }));

app.get('/api/test', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3001, () => {
  console.log('Backend server is running on http://localhost:3001');
});