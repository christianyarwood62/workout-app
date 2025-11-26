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
      Add an exercise
    </button>
  );
}

export default AddExerciseTile;
