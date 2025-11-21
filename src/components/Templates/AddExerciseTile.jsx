import { useTemplates } from "../../contexts/TemplatesContext";

import styles from "./AddExerciseTile.module.css";

function AddExerciseTile() {
  const { handleShowingNewExerciseFrom } = useTemplates();
  return (
    <button
      type="button"
      className={`${styles["add-template-exercise-button"]} ${"button"}`}
      onClick={() => handleShowingNewExerciseFrom()}
    >
      <p>Add an exercise</p>
    </button>
  );
}

export default AddExerciseTile;
