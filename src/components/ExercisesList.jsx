import Loader from "./Loader";
import Exercise from "./Exercise";
import { useExercises } from "../contexts/ExercisesContext";
import ExerciseSearchBar from "./ExerciseSearchBar";
import { useEffect } from "react";

function ExercisesList() {
  const { exercises, searchedExercise, isLoading } = useExercises();

  return (
    <>
      <div className="exercises-component">
        <h1>List of exercises</h1>
        <ExerciseSearchBar />
        {isLoading ? (
          <Loader />
        ) : (
          <>
            {searchedExercise ? (
              <p>Showing results for {searchedExercise}...</p>
            ) : (
              <p>Showing all results</p>
            )}
            <div className="exercises-list">
              {exercises?.map((exercise) => (
                <Exercise exercise={exercise} key={exercise.name}>
                  {exercise.name}
                </Exercise>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default ExercisesList;
