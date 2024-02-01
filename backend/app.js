// backend/server.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors middleware

const app = express();
const port = 3001;

app.use(cors()); // Use cors middleware
app.use(bodyParser.json());

app.post('/api/sendData', (req, res) => {
  const receivedData = req.body;
  console.log('Received data on the server:', receivedData);
  res.json({ message: 'Data received successfully on the server' });
});
app.post('/getOTP', (req, res) => {
  const receivedData = req.body;
  console.log('Received data on the server:', receivedData);
  res.json({ message: 'Data received successfully on the server' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
