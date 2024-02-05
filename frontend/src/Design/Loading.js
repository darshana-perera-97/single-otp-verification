import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

export default function Loading() {
  const [progress, setProgress] = React.useState(0);
  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      );
    }, 800);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div>
      <CircularProgress variant="determinate" value={progress} />
    </div>
  );
}
