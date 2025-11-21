import { useAuthentication } from "../contexts/AuthenticationContext";
import styles from "./LoginDropDown.module.css";

function LoginDropDown({ isDropDownOpen }) {
  const { user } = useAuthentication();

  return (
    <div
      className={`${styles["login-dropdown-container"]} ${
        isDropDownOpen ? styles.open : ""
      }`}
    >
      {user !== null ? (
        <p className={styles["login-dropdown_user"]}>Logged in as {user}</p>
      ) : (
        <div>
          <p className={styles["login-dropdown_user"]}>Dont have an account?</p>
          <p>Sign up</p>
        </div>
      )}
    </div>
  );
}

export default LoginDropDown;
