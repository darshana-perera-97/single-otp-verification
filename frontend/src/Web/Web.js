import React from "react";
import line from "../Assets/line.png";
import otp from "../Assets/otp.png";

export default function Web(prop) {
  const [dataToSend, setDataToSend] = React.useState("");
  const [responseMessage, setResponseMessage] = React.useState("");

  const sendDataToServer = () => {
    fetch("http://localhost:3001/api/sendData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: dataToSend.toString() }),
    })
      .then((response) => response.json())
      .then((data) => {
        setResponseMessage(data.message);
        if (responseMessage === "success") {
          prop.setOk(false);
        }
      })
      .catch((error) => {
        console.error("Error sending data to server:", error.message);
      });
  };
  return (
    <div className="login main-background">
      <div className="container">
        <div className="row">
          <div className="col-md-6 left-background p-5 text-center">
            <div className="mt-4"></div>
            <img src={otp} alt="login Asset" className="h-50 py-5 mt-5" />
            <h1>Easy Verification</h1>
            <h3 className="mt-3">
              Easy way to verify your
              <br /> system login
            </h3>
            <img src={line} alt="login Asset" className="w-50 py-2 mt-1 px-4" />
          </div>
          <div className="col-md-6 form p-5 text-center">
            <div className="mt-5 pt-5"></div>
            <h1 className="mt-md-5 pt-md-5">Easy Verification Code</h1>
            <h3 className="mt-3">Easy way to verify your system login</h3>
            <div className="px-5">
              <input
                className="w-100 px-2"
                placeholder="Enter OTP code"
                onKeyPress={(e) => {
                  // Allow only numeric keys and certain control keys like Backspace and Arrow keys
                  const allowedKeys = [
                    "0",
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7",
                    "8",
                    "9",
                    "Backspace",
                    "ArrowLeft",
                    "ArrowRight",
                    "Delete",
                    "Tab",
                  ];
                  if (!allowedKeys.includes(e.key)) {
                    e.preventDefault();
                  }
                }}
                onChange={(e) => {
                  const enteredValue = e.target.value;
                  const intValue = parseInt(enteredValue, 10);
                  setDataToSend(isNaN(intValue) ? "" : intValue);
                }}
              />

              <button
                className="btn primary-btn mt-5 px-3 py-3"
                onClick={sendDataToServer}
                if
              >
                Submit OTP Code
              </button>
              {responseMessage}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
