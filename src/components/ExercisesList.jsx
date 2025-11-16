import Loader from "./Loader";
import Exercise from "./Exercise";
import { useExercises } from "../contexts/ExercisesContext";
import ExerciseSearchBar from "./ExerciseSearchBar";
import { useEffect } from "react";
import Button from "../UI/Button";

function ExercisesList() {
  const { exercises, searchedExercise, isLoading, setSearchedExercise } =
    useExercises();

  return (
    <>
      <div className="exercises-component">
        <h1>List of exercises</h1>
        <div className="searchbar">
          <ExerciseSearchBar />
          <Button onClick={() => setSearchedExercise("")}> X Reset</Button>
        </div>
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
