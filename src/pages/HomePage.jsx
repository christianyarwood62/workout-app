import { useNavigate } from "react-router-dom";
import Navbar from "../components/NavBar";
import Button from "../UI/Button";

import styles from "./HomePage.module.css";

function Homepage() {
  return (
    <div className="main-content">
      <div className={styles["homepage-container"]}>
        <h1>Dream Workout</h1>
        <p>Log in to gain access to exercise history</p>
        <Button to="./login">Log in</Button>
      </div>
    </div>
  );
}

export default Homepage;
