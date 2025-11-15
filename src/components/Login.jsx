import { useEffect, useState } from "react";
import { useAuthentication } from "../contexts/AuthenticationContext";
import { useNavigate } from "react-router-dom";
import Button from "../UI/Button";

export function Login() {
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
    <div className="content-container">
      <form onSubmit={handleLogin}>
        <div className="email-container">
          <label for="email">Email address:</label>
          <input id="email" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="password-container">
          <label for="password">Password</label>
          <input id="password" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <Button>login</Button>
      </form>
    </div>
  );
}

export default Login;
