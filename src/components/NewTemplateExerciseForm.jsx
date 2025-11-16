import { useState } from "react";
import { useExercises } from "../contexts/ExercisesContext";
import { useTemplates } from "../contexts/TemplatesContext";

function NewTemplateExerciseForm() {
  const [setsInput, setSetsInput] = useState("");
  const [repsInput, setRepsInput] = useState("");
  const [exerciseName, setExerciseName] = useState("");

  const {
    isTemplateOverlayOpen,
    handleToggleTemplateFormOverlay,
    handleAddExerciseToTemplate,
  } = useTemplates();

  const { exercises } = useExercises();

  if (!isTemplateOverlayOpen) return null;

  return (
    <div onClick={handleToggleTemplateFormOverlay} className="overlay-backdrop">
      <div
        onClick={(e) => e.stopPropagation()}
        className="overlay-content element-container" // no CSS for overlay-content, just here for understanding
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleAddExerciseToTemplate(exerciseName, setsInput, repsInput);
          }}
        >
          <select
            onChange={(e) => setExerciseName(e.target.value)}
            className="button"
          >
            <option>Choose an exercise</option>
            {exercises.map((exercise, i) => (
              <option key={`exercise-${i}`}>{exercise.name}</option>
            ))}
          </select>
          <label htmlFor="sets">Sets:</label>
          <input
            value={setsInput}
            name="sets"
            onChange={(e) => setSetsInput(e.target.value)}
          />
          <label htmlFor="reps">Reps:</label>
          <input
            value={repsInput}
            name="reps"
            onChange={(e) => setRepsInput(e.target.value)}
          />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default NewTemplateExerciseForm;
