import { useExercises } from "../../contexts/ExercisesContext";

import styles from "./Exercise.module.css";

function Exercise({ exercise, children }) {
  const { handleSelection } = useExercises();

  return (
    <div className={styles.exercise}>
      <button
        className={styles["exercise-icon"]}
        onClick={() => handleSelection(exercise)}
      >
        <p>{children}</p>
      </button>
    </div>
  );
}

export default Exercise;
