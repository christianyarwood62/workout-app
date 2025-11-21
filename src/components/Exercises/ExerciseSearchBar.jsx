import { useState } from "react";
import { useExercises } from "../../contexts/ExercisesContext";
import Button from "../../UI/Button";
import { X } from "lucide-react";

function ExerciseSearchBar() {
  const { handleSearchedExercise, searchedExercise } = useExercises();
  const [input, setInput] = useState("");

  return (
    <div className="search-container">
      <h1>List of exercises</h1>
      <form
        className="search-bar"
        onSubmit={(e) => {
          e.preventDefault();
          handleSearchedExercise(input);
          setInput("");
        }}
      >
        <span>🔎</span>
        <input
          name="exercise-search"
          className="search-input"
          type="text"
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search for Exercises..."
          value={input}
        />
      </form>
      {searchedExercise ? (
        <div className="results-button-container">
          <Button
            className="button-with-icon"
            onClick={() => handleSearchedExercise("")}
          >
            <X className="svg" color="black" />
            <p>Reset</p>
          </Button>
          <p>Showing results for {searchedExercise}...</p>
        </div>
      ) : (
        <p>Showing all results</p>
      )}
    </div>
  );
}

export default ExerciseSearchBar;
