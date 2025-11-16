import { useState } from "react";
import { useExercises } from "../contexts/ExercisesContext";

function ExerciseSearchBar() {
  const { handleSearchedExercise } = useExercises();
  const [input, setInput] = useState("");

  return (
    <form
      className="search-container"
      onSubmit={(e) => {
        handleSearchedExercise(input);
        e.preventDefault();
        // const filteredExercises = exercises.filter((exercise) =>
        //   exercise.name.includes(input)
        // );
        // setExercises(filteredExercises);
      }}
    >
      <span>🔎</span>
      <input
        className="search-input"
        type="text"
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search for Exercises..."
        value={input}
      />
    </form>
  );
}

export default ExerciseSearchBar;
