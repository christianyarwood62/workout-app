import { useState } from "react";
import { useExercises } from "../../contexts/ExercisesContext";
import { useTemplates } from "../../contexts/TemplatesContext";

import styles from "./NewTemplateExerciseOverlay.module.css";

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
        className={styles.newTemplateContainer}
      >
        <form
          className={styles.newTemplateForm}
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
            className={styles.input}
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
            className={styles.input}
            value={setsInput}
            required
            name="sets"
            onChange={(e) => setSetsInput(e.target.value)}
            placeholder="Sets?"
          />
          <input
            type="number"
            min={1}
            className={styles.input}
            required
            value={repsInput}
            name="reps"
            onChange={(e) => setRepsInput(e.target.value)}
            placeholder="Reps?"
          />
          <button className={styles.saveButton}>Save</button>
        </form>
      </div>
    </div>
  );
}

export default NewTemplateExerciseOverlay;
