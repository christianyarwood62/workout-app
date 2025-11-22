import { useEffect, useState } from "react";
import { useAuthentication } from "../contexts/AuthenticationContext";
import { useNavigate } from "react-router-dom";
import Button from "../UI/Button";

import styles from "./Login.module.css";

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
    <form className={styles["login_form"]} onSubmit={handleLogin}>
      <h2>Welcome Back</h2>
      <div className={styles["login_field"]}>
        <label className={styles["login_label"]} htmlFor="email">
          Email Address
        </label>
        <input
          className={styles["login_input"]}
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className={styles["login_field"]}>
        <label className={styles["login_label"]} htmlFor="password">
          Password
        </label>
        <input
          className={styles["login_input"]}
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className={styles["login_user_checks"]}>
        <div className={styles["login_checkbox_container"]}>
          <input
            name="login-checkbox"
            className={styles["login_checkbox"]}
            type="checkbox"
          />
          <label htmlFor="login-checkbox">Remember me</label>
        </div>

        <button className={styles["login_button"]}>Forgot password?</button>
      </div>
      <Button className={styles["login_signIn_button"]}>Sign in</Button>
      <div className={styles["login_signUp_text"]}>
        <button className={styles["login_button"]}>
          Don't have an account?
        </button>{" "}
        <button className={`${styles["login_button"]}`}>Sign Up</button>
      </div>
    </form>
  );
}

export default Login;
