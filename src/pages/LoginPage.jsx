import Navbar from "../components/NavBar";
import Login from "../components/Login";
import styles from "./LoginPage.module.css";

function LoginPage() {
  return (
    <div className="main-content">
      <div className={styles["login-page"]}>
        <div className={styles["loginPage_logo"]}>Logo</div>
        <div className={styles["login-title"]}>
          <h1 className={styles["login-title-header"]}>Dream Workout</h1>
          <p className={styles["login-title-text"]}>
            Transform into the best version of yourself
          </p>
        </div>
        <Login />
      </div>
    </div>
  );
}

export default LoginPage;
