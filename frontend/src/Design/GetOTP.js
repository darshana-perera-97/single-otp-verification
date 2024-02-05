import React from "react";

export default function GetOTP() {
  const [dataToSend, setDataToSend] = React.useState("");
  const [otp, setotp] = React.useState(1234);
  React.useEffect(() => {
    const getOTP = () => {
      fetch("http://localhost:3001/getOTP", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: dataToSend }),
      })
        .then((response) => response.json())
        .then((data) => {
          setotp(data.message);
        })
        .catch((error) => {
          console.error("Error sending data to server:", error.message);
        });
    };
    getOTP();
  }, []);
  React.useEffect(() => {
    const getOTP = () => {
      fetch("http://localhost:3001/getOTP", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: dataToSend }),
      })
        .then((response) => response.json())
        .then((data) => {
          setotp(data.message);
        })
        .catch((error) => {
          console.error("Error sending data to server:", error.message);
        });
    };
    const intervalId = setInterval(() => {
      getOTP();
      console.log("first");
    }, 120000);

    return () => {
      clearInterval(intervalId);
      console.log("Interval cleared");
    };
  }, []);
  return <div>{otp}</div>;
}
