import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const tab1 = "Exercises";
  const tab2 = "Workout Templates";
  const tab3 = "Exercise history";

  return (
    <header className="navbar-header">
      <div className="navbar-container">
        <h1 className="navbar-logo">
          <NavLink to="/">Dream Workout</NavLink>
        </h1>

        <button onClick={() => setIsOpen(!isOpen)} className="burger-menu">
          &#9776;
        </button>

        <nav className={`navbar-links ${isOpen ? "open" : ""}`}>
          <NavLink to="/exercises">{tab1}</NavLink>
          <NavLink to="/workout">{tab2}</NavLink>
          <NavLink to="/history">{tab3}</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
