// backend/server.js

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors"); // Import the cors middleware

const app = express();
const port = 3001;
var code = 3001;

function generateRandomNumber() {
  const randomNumber = Math.floor(Math.random() * 1000000); // Generates a random number between 0 and 999999
  code = randomNumber.toString().padStart(6, "0"); // Ensure leading zeros if necessary
}

app.use(cors()); // Use cors middleware
app.use(bodyParser.json());

app.post("/api/sendData", (req, res) => {
  const receivedData = req.body;
  console.log("Received data on the server:", receivedData.data, "| ", code);
  if (receivedData.data === code) {
    res.json({ message: "success" });
  } else {
    res.json({ message: "error" });
  }
});
app.post("/getOTP", (req, res) => {
  generateRandomNumber();
  res.json({ message: code });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
