import { useAuthentication } from "../contexts/AuthenticationContext";
import { User, LogIn, ChevronDown } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginDropDown from "./LoginDropDown";
import Button from "../UI/Button";
import styles from "./UserTile.module.css";

function UserTile() {
  const { user } = useAuthentication();

  const [isDropdownOpen, setIsDropDownOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className={styles["profileTile_container"]}>
      <User color="#e9e2e2" />

      {user ? (
        <span>{user}</span>
      ) : (
        <Button className={styles["userTile_signIn_button"]} to="/login">
          Sign in
        </Button>
      )}
      <button className={styles.chevronDown}>
        <ChevronDown onClick={() => setIsDropDownOpen(!isDropdownOpen)} />
      </button>
      <LoginDropDown isDropDownOpen={isDropdownOpen} />
    </div>
  );
}

export default UserTile;
