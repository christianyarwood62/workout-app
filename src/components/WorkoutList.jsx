import { useState, useEffect } from "react";

import Loader from "./Loader";
import Exercise from "../components/Exercise";

function WorkoutList({
  exercises,
  onSelection,
  selectedExercise,
  onAddToWorkout,
  setExercises,
}) {
  const [searchedExercise, setSearchedExercise] = useState("");
  const [showingResultsIsopen, setShowingResultsIsOpen] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState("");

  function searchExercise(e) {
    // if (e.key === "Enter") {
    setSearchedExercise(e.target.value);
  }

  useEffect(
    function () {
      const controller = new AbortController();

      async function getExercises() {
        try {
          setErr("");
          let res = await fetch(
            `https://api.api-ninjas.com/v1/exercises?name=${searchedExercise}`,
            // { signal: controller.signal },
            {
              signal: controller.signal,
              headers: {
                "X-Api-Key": "SphLNzCc4LFN8J9GCrK4Kw==YWu2RSP860Dn0657",
              },
            }
          );

          if (!res.ok) throw new Error("Failed to retrieve exercises");

          let exerciseDetails = await res.json();

          if (exerciseDetails.length === 0) {
            setExercises(null);
          } else {
            setExercises(exerciseDetails);
          }
        } catch (err) {
          if (err.name !== "AbortError") {
            console.log(err.message);
            setErr(err.message);
            setIsLoading(false);
          }
        } finally {
          if (!controller.signal.aborted) {
            setIsLoading(false);
            setErr("");
          }
        }
      }

      setIsLoading(true);
      getExercises();

      return function () {
        controller.abort(); // This cancels fetch request everytime theres a new keystroke, to avoid fetching every time a new letter is typed
      };
    },
    [searchedExercise, setExercises]
  );

  return (
    <div className="exercises-list-component backgroundContainer">
      <div className="exercises-header">
        {/* <h1>{tab1}</h1> */}
        <input
          className="searchExercisesInput"
          type="text"
          onChange={(e) => searchExercise(e)}
          placeholder="Search for Exercises..."
          value={searchedExercise}
        />
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
            <Exercise
              exercise={exercise}
              key={exercise.name}
              onSelection={onSelection}
              selectedExercise={selectedExercise}
              onAddToWorkout={onAddToWorkout}
            >
              {exercise.name}
            </Exercise>
          ))}
        </div>
      )}
    </div>
  );
}

export default WorkoutList;
