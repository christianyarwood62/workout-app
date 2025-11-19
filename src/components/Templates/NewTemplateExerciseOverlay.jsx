import { useState } from "react";
import { useExercises } from "../../contexts/ExercisesContext";
import { useTemplates } from "../../contexts/TemplatesContext";

function NewTemplateExerciseOverlay() {
  const [setsInput, setSetsInput] = useState("");
  const [repsInput, setRepsInput] = useState("");
  const [exerciseName, setExerciseName] = useState("");

  const { handleAddExerciseToTemplate, handleShowingNewExerciseFrom } =
    useTemplates();

  const { exercises } = useExercises();

  return (
    <div
      onClick={(e) => {
        e.preventDefault();
        setSetsInput("");
        setRepsInput("");
        handleShowingNewExerciseFrom();
      }}
      className="overlay-backdrop"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="overlay-content element-container" // no CSS for overlay-content, just here for understanding
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleAddExerciseToTemplate(exerciseName, setsInput, repsInput);
            handleShowingNewExerciseFrom();
            setRepsInput(null);
            setSetsInput(null);
          }}
        >
          <select
            onChange={(e) => setExerciseName(e.target.value)}
            className="button"
            required
          >
            <option>Choose an exercise</option>
            {exercises.map((exercise, i) => (
              <option key={`exercise-${i}`}>{exercise.name}</option>
            ))}
          </select>
          <input
            type="number"
            min={1}
            className="button"
            value={setsInput}
            required
            name="sets"
            onChange={(e) => setSetsInput(e.target.value)}
            placeholder="Sets?"
          />
          <input
            type="number"
            min={1}
            className="button"
            required
            value={repsInput}
            name="reps"
            onChange={(e) => setRepsInput(e.target.value)}
            placeholder="Reps?"
          />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default NewTemplateExerciseOverlay;
