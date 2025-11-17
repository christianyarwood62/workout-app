import Loader from "./Loader";
import Exercise from "./Exercise";
import { useExercises } from "../contexts/ExercisesContext";
import ExerciseSearchBar from "./ExerciseSearchBar";
import Button from "../UI/Button";
import { X } from "lucide-react";

function ExercisesList() {
  const { exercises, searchedExercise, isLoading, handleSearchedExercise } =
    useExercises();

  return (
    <>
      <div className="exercises-component">
        <h1>List of exercises</h1>
        <div className="searchbar">
          <ExerciseSearchBar />
          <Button
            className="button-with-icon"
            onClick={() => handleSearchedExercise("")}
          >
            <X color="black" />
            <p>Reset</p>
          </Button>
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
