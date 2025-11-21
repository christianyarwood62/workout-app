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
    <form className="login_form" onSubmit={handleLogin}>
      <h2>Welcome Back</h2>
      <div className="login_field">
        <label className="login_label" htmlFor="email">
          Email Address
        </label>
        <input
          className="login_input"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="login_field">
        <label className="login_label" htmlFor="password">
          Password
        </label>
        <input
          className="login_input"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="login_user_checks">
        <div className="login_checkbox_container">
          <input
            name="login-checkbox"
            className="login_checkbox"
            type="checkbox"
          />
          <label htmlFor="login-checkbox">Remember me</label>
        </div>

        <button className="login_button">Forgot password?</button>
      </div>
      <Button className={"login_signIn_button"}>Sign in</Button>
      <div className="login_signUp_text">
        <button className="login_button">Don't have an account?</button>{" "}
        <button className="login_button bold">Sign Up</button>
      </div>
    </form>
  );
}

export default Login;
