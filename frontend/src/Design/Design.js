// frontend/src/App.js

import React, { useState } from 'react';

function Design() {
  const [dataToSend, setDataToSend] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const sendDataToServer = () => {
    fetch('http://localhost:3001/api/sendData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data: dataToSend }),
    })
      .then(response => response.json())
      .then(data => {
        setResponseMessage(data.message);
      })
      .catch(error => {
        console.error('Error sending data to server:', error.message);
      });
  };

  return (
    <div>
      {/* <h1>React.js Frontend</h1> */}
      <label>
        Data to send to server:
        <input
          type="text"
          value={dataToSend}
          onChange={(e) => setDataToSend(e.target.value)}
        />
      </label>
      <button onClick={sendDataToServer}>Send Data</button>
      <p>Response from server: {responseMessage}</p>
    </div>
  );
}

export default Design;
