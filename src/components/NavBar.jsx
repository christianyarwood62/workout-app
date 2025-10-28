import { NavLink } from "react-router-dom";

function Navbar({ tab, onSelectTab }) {
  const tab1 = "Exercises";
  const tab2 = "Workout Templates";
  const tab3 = "Exercise history";

  return (
    <header>
      <h1>Dream Workout</h1>
      <nav>
        <NavLink to="/exercises">{tab1}</NavLink>
        <NavLink to="/workout">{tab2}</NavLink>
        <NavLink to="/history">{tab3}</NavLink>
      </nav>
    </header>
  );
}

export default Navbar;
