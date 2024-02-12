import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import User from "./User";
import Admin from "./Admin";

export default function RoutingPage() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<User />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Router>
    </div>
  );
}
