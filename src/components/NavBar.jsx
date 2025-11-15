import { NavLink } from "react-router-dom";

function Navbar() {
  const tab1 = "Exercises";
  const tab2 = "Workout Templates";
  const tab3 = "Exercise history";

  return (
    <header>
      <div className="navbar">
        <h1>
          <NavLink to="/">Dream Workout</NavLink>
        </h1>
        <nav>
          <NavLink to="/exercises">{tab1}</NavLink>
          <NavLink to="/workout">{tab2}</NavLink>
          <NavLink to="/history">{tab3}</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
