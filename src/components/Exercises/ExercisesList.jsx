import Loader from "../Loader";
import Exercise from "./Exercise";
import { useExercises } from "../../contexts/ExercisesContext";

import styles from "./ExercisesList.module.css";

function ExercisesList() {
  const { exercises, isLoading } = useExercises();

  return (
    <>
      <div className={styles.searchbar}></div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={styles["exercises-list"]}>
          {exercises?.map((exercise) => (
            <Exercise exercise={exercise} key={exercise.name}>
              {exercise.name}
            </Exercise>
          ))}
        </div>
      )}
    </>
  );
}

export default ExercisesList;
