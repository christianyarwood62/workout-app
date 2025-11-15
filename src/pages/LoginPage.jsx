import { useState, useEffect } from "react";
import { useAuthentication } from "../contexts/AuthenticationContext";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/NavBar";
import Login from "../components/Login";

function LoginPage() {
  return (
    <div className="main-content">
      <Login />
    </div>
  );
}

export default LoginPage;
