import { useExercises } from "../contexts/ExercisesContext";

function ExerciseSearchBar() {
  const { searchedExercise, searchExercise } = useExercises();
  return (
    <div>
      <input
        className="searchExercisesInput"
        type="text"
        onChange={(e) => searchExercise(e)}
        placeholder="Search for Exercises..."
        value={searchedExercise}
      />
    </div>
  );
}

export default ExerciseSearchBar;
