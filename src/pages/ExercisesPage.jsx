import { useState } from "react";

import WorkoutList from "../components/WorkoutList";
import ExerciseDetails from "../components/ExerciseDetails";
import Navbar from "../components/NavBar";

function ExercisesPage() {
  const [exercises, setExercises] = useState([]);
  const [selectedExercise, setSelectedExercise] = useState(null);

  function handleAddExerciseToRoutine(exercise) {
    setChosenExerciseForRoutine(exercise);
    setExerciseRoutine((exerciseRoutine) => [...exerciseRoutine, exercise]);
  }

  function handleSelection(exercise) {
    //
    setSelectedExercise((cur) =>
      cur?.name === exercise.name ? null : exercise
    );
  }

  return (
    <div className="exercise-details-tab">
      <Navbar />
      <WorkoutList
        exercises={exercises}
        onSelection={handleSelection}
        selectedExercise={selectedExercise}
        onAddToWorkout={handleAddExerciseToRoutine}
        setExercises={setExercises}
      />
      {/* <ExerciseDetails
        selectedExercise={selectedExercise}
        onSelection={handleSelection}
      /> */}
    </div>
  );
}

export default ExercisesPage;
