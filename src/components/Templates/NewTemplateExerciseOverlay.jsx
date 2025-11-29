import { useState } from "react";
import { useExercises } from "../../contexts/ExercisesContext";
import { useTemplates } from "../../contexts/TemplatesContext";

import styles from "./NewTemplateExerciseOverlay.module.css";
import { X } from "lucide-react";

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
        <h2>Add Exercise</h2>
        <X />

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
          <label htmlFor="exercise">Exercise</label>
          <select
            onChange={(e) => setExerciseName(e.target.value)}
            className={styles.input}
            required
            name="exercise"
          >
            <option>Choose an exercise</option>
            {exercises.map((exercise, i) => (
              <option key={`exercise-${i}`}>{exercise.name}</option>
            ))}
          </select>

          <label htmlFor="sets">Sets</label>
          <input
            type="number"
            min={1}
            className={styles.input}
            value={setsInput}
            required
            name="sets"
            onChange={(e) => setSetsInput(e.target.value)}
            placeholder="0"
          />

          <label htmlFor="reps">Reps</label>
          <input
            type="number"
            min={1}
            className={styles.input}
            required
            value={repsInput}
            name="reps"
            onChange={(e) => setRepsInput(e.target.value)}
            placeholder="0"
          />
          <button className="text-btn">Save</button>
        </form>
      </div>
    </div>
  );
}

export default NewTemplateExerciseOverlay;
