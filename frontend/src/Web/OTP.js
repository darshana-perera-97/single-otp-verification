import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import admin from "../Assets/admin.png";
import line from "../Assets/line.png";

export default function OTP() {
  const [otp, setotp] = React.useState(1234);
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 1
      );
    }, 100);

    return () => {
      clearInterval(timer);
    };
  }, []);
  React.useEffect(() => {
    if (progress === 0) {
      fetch("http://localhost:3001/getOTP", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
      })
        .then((response) => response.json())
        .then((data) => {
          setotp(data.message);
        })
        .catch((error) => {
          console.error("Error sending data to server:", error.message);
        });
    }
  }, [progress]);
  React.useEffect(() => {
    const getOTP = () => {
      fetch("http://localhost:3001/getOTP", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
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
    }, 60000);

    return () => {
      clearInterval(intervalId);
      console.log("Interval cleared");
    };
  }, []);
  return (
    <div className="login main-background">
      <div className="container">
        <div className="row">
          <div className="col-md-6 left-background p-5 text-center">
            <div className="mt-4"></div>
            <img src={admin} alt="login Asset" className="h-50 py-5 mt-5" />
            <h1>Admin View</h1>
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
              <h1 className="mt-5 otp">{otp}</h1>
              <button
                className="btn primary-btn mt-5 px-3 py-3"
                onClick={() => {
                  setProgress(0);
                  fetch("http://localhost:3001/getOTP", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({}),
                  })
                    .then((response) => response.json())
                    .then((data) => {
                      setotp(data.message);
                    })
                    .catch((error) => {
                      console.error(
                        "Error sending data to server:",
                        error.message
                      );
                    });
                }}
              >
                Regenerate OTP Code
              </button>
            </div>
            <CircularProgress variant="determinate" value={progress} />
          </div>
        </div>
      </div>
    </div>
  );
}
