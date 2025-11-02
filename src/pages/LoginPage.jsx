import { useState, useEffect } from "react";
import { useAuthentication } from "../contexts/AuthenticationContext";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, logout, isAuthenticated } = useAuthentication();

  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    if (email && password) login(email, password);
  }

  useEffect(() => {
    if (isAuthenticated) navigate("/login");
  }, [isAuthenticated, navigate]);

  return (
    <>
      <div className="element-container">
        <form onSubmit={handleLogin}>
          <span>Email:</span>
          <input onChange={(e) => setEmail(e.target.value)}></input>
          <span>Password</span>
          <input onChange={(e) => setPassword(e.target.value)}></input>
          <button>login</button>
        </form>
      </div>
    </>
  );
}

export default LoginPage;
