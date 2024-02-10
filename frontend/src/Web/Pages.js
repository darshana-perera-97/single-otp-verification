import React from "react";
import Login from "./Login";
import OTP from "./OTP";
import Web from "./Web";
import Design from "../Design/Design";
import GetOTP from "../Design/GetOTP";

export default function Pages() {
  return (
    <div>
      <Login />
      <OTP />
      <Web />
      {/* <Design /> */}
      {/* <GetOTP /> */}
    </div>
  );
}
