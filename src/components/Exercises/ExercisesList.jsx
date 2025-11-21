import Loader from "../Loader";
import Exercise from "./Exercise";
import { useExercises } from "../../contexts/ExercisesContext";
import Button from "../../UI/Button";
import { X } from "lucide-react";

function ExercisesList() {
  const { exercises, isLoading, handleSearchedExercise } = useExercises();

  return (
    <>
      <div className="searchbar"></div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="exercises-list">
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
