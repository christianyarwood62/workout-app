import Loader from "./Loader";
import Exercise from "./Exercise";
import { useExercises } from "../contexts/ExercisesContext";

function ExercisesList() {
  const { exercises, searchedExercise, isLoading } = useExercises();

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="exercises-component">
          <h1>List of exercises</h1>
          {searchedExercise ? (
            <p>Showing results for {searchedExercise}...</p>
          ) : (
            <div>Showing all results</div>
          )}
          <div className="exercises-list">
            {exercises?.map((exercise) => (
              <Exercise exercise={exercise} key={exercise.name}>
                {exercise.name}
              </Exercise>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default ExercisesList;
