import React from "react";
import Login from "./Login";
import OTP from "./OTP";

export default function Admin() {
  const [ok, setOk] = React.useState(true);
  return (
    <div>
      {ok && <Login setOk={setOk} />}
      {!ok && <OTP />}
    </div>
  );
}
