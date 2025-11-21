import { useState, useEffect } from "react";
import { useAuthentication } from "../contexts/AuthenticationContext";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/NavBar";
import Login from "../components/Login";

function LoginPage() {
  return (
    <div className="main-content">
      <div className="login-page">
        <div className="loginPage-logo">Logo</div>
        <div className="login-title">
          <h1 className="login-title-header">Dream Workout</h1>
          <p className="login-title-text">
            Transform into the best version of yourself
          </p>
        </div>
        <Login />
      </div>
    </div>
  );
}

export default LoginPage;
