function Navbar({ tab, onSelectTab }) {
  const tab1 = "Exercises";
  const tab2 = "Start a workout";
  const tab3 = "Exercise history";

  return (
    <header>
      <h1>Dream Workout</h1>
      <nav>
        <button
          className={tab === tab1 ? "selectedTab" : ""}
          onClick={() => onSelectTab(tab1)}
        >
          {tab1}
        </button>
        <button
          className={tab === tab2 ? "selectedTab" : ""}
          onClick={() => onSelectTab(tab2)}
        >
          {tab2}
        </button>
        <button
          className={tab === tab3 ? "selectedTab" : ""}
          onClick={() => onSelectTab(tab3)}
        >
          {tab3}
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
