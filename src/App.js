import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

const isAuthenticated = () => {
  // Check if token or user is present in local storage
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user");
  return token || user;
};

const PrivateRoute = ({ element, path }) => {
  // Redirect to login if not authenticated
  return isAuthenticated() ? (
    element
  ) : (
    <Navigate to="/login" state={{ from: path }} replace />
  );
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<PrivateRoute element={<Home />} path="/" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Register />} />
      <Route
        path="/profile"
        element={<PrivateRoute element={<Home />} path="/profile" />}
      />
      <Route
        path="*"
        element={
          <h1 className="flex items-center justify-center text-[35px] font-bold">
            Page Not Found
          </h1>
        }
      />
    </Routes>
  );
}

export default App;
