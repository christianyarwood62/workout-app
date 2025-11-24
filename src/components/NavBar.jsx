import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styles from "./NavBar.module.css";

import logo from "../assets/company-logo.png";

import { Activity, BookOpen, Dumbbell } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const tab1 = "Exercises";
  const tab2 = "Workout Templates";
  const tab3 = "Exercise history";

  // Closes the burger menu when the user navigates to a different page
  const location = useLocation();
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

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
          className={`${styles["navbar-links"]} ${isOpen ? styles.open : ""}`}
        >
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : "")}
            to="/exercises"
          >
            <div className={styles.openNavbarSection}>
              <Activity /> <p>{tab1}</p>
            </div>
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : "")}
            to="/workout"
          >
            <div className={styles.openNavbarSection}>
              <Dumbbell /> <p>{tab2}</p>
            </div>
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : "")}
            to="/history"
          >
            <div className={styles.openNavbarSection}>
              <BookOpen /> <p>{tab3}</p>
            </div>
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
