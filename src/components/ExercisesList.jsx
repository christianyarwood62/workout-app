import { useState, useEffect } from "react";
import Loader from "./Loader";
import Exercise from "./Exercise";
import ExerciseSearchBar from "./ExerciseSearchBar";
import { useExercises } from "../contexts/ExercisesContext";

function ExercisesList({ selectedExercise, onAddToWorkout }) {
  const [showingResultsIsopen, setShowingResultsIsOpen] = useState(true);

  const {
    exercises,
    setExercises,
    searchedExercise,
    handleSelection,
    isLoading,
  } = useExercises();

  return (
    <div className="exercises-list-component backgroundContainer">
      <div className="exercises-header">
        {isLoading ? (
          <Loader />
        ) : (
          showingResultsIsopen &&
          (exercises ? (
            searchedExercise ? (
              <div>Showing results for {searchedExercise}</div>
            ) : (
              ""
            )
          ) : (
            <div>No results</div>
          ))
        )}
      </div>
      {!isLoading && (
        <div className="exercises-list backgroundContainer">
          {exercises?.map((exercise) => (
            <Exercise exercise={exercise} key={exercise.name}>
              {exercise.name}
            </Exercise>
          ))}
        </div>
      )}
    </div>
  );
}

export default ExercisesList;
