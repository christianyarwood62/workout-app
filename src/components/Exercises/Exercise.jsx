import { useExercises } from "../../contexts/ExercisesContext";

import styles from "./Exercise.module.css";

function Exercise({ exercise, children }) {
  const { handleSelection } = useExercises();

  return (
    <button
      className={`${styles["exercise-icon"]}`}
      onClick={() => handleSelection(exercise)}
    >
      {children}
    </button>
  );
}

export default Exercise;
