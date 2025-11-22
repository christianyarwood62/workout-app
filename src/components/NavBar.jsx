import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

import logo from "../assets/company-logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const tab1 = "Exercises";
  const tab2 = "Workout Templates";
  const tab3 = "Exercise history";

  return (
    <header className={styles["navbar-header"]}>
      <div className={styles["navbar-container"]}>
        <h1 className={styles["navbar-logo"]}>
          <NavLink to="/">
            <img src={logo} className={styles["navbarLogo"]} />
          </NavLink>
        </h1>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={styles["burger-menu"]}
        >
          &#9776;
        </button>

        <nav
          className={`${styles["navbar-links"]} ${
            isOpen ? styles["open"] : ""
          }`}
        >
          <NavLink to="/exercises">{tab1}</NavLink>
          <NavLink to="/workout">{tab2}</NavLink>
          <NavLink to="/history">{tab3}</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
