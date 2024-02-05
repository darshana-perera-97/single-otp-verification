import React from "react";

export default function Verify() {
  const [responseMessage, setResponseMessage] = React.useState("");
  const [dataToSend, setDataToSend] = React.useState("");

  const sendDataToServer = () => {
    fetch("http://localhost:3001/api/sendData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: dataToSend }),
    })
      .then((response) => response.json())
      .then((data) => {
        setResponseMessage(data.message);
      })
      .catch((error) => {
        console.error("Error sending data to server:", error.message);
      });
  };
  return (
    <div>
      <label>
        Data to send to server:
        <input
          type="text"
          value={dataToSend}
          onChange={(e) => setDataToSend(e.target.value)}
        />
      </label>
      <button onClick={sendDataToServer}>Send Data</button>
      <p>{responseMessage}</p>
    </div>
  );
}
