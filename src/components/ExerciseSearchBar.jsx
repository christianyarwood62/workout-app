import { useExercises } from "../contexts/ExercisesContext";

function ExerciseSearchBar() {
  const { searchedExercise, searchExercise } = useExercises();
  return (
    <div className="search-container">
      <span>🔎</span>
      <input
        className="search-input"
        type="text"
        onChange={(e) => searchExercise(e)}
        placeholder="Search for Exercises..."
        value={searchedExercise}
      />
    </div>
  );
}

export default ExerciseSearchBar;
