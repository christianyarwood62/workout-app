import Loader from "./Loader";
import Exercise from "./Exercise";
import { useExercises } from "../contexts/ExercisesContext";

function ExercisesList() {
  const {
    exercises,
    searchedExercise,
    isLoading,
  } = useExercises();

  return (
    <div className="exercises-component">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <h1>List of exercises</h1>
          {searchedExercise ? (
            <div>Showing results for {searchedExercise}</div>
          ) : (
            <div>Showing all results</div>
          )}
          <div className="exercises-list backgroundContainer">
            {exercises?.map((exercise) => (
              <Exercise exercise={exercise} key={exercise.name}>
                {exercise.name}
              </Exercise>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default ExercisesList;
