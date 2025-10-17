import { useState } from "react";

import WorkoutList from "../components/WorkoutList";
import ExerciseDetails from "../components/ExerciseDetails";

function ExercisesPage({
  handleSelection,
  selectedExercise,
  handleAddExerciseToRoutine,
}) {
  const [exercises, setExercises] = useState([]);

  return (
    <div className="exercise-details-tab">
      <WorkoutList
        exercises={exercises}
        onSelection={handleSelection}
        selectedExercise={selectedExercise}
        onAddToWorkout={handleAddExerciseToRoutine}
        setExercises={setExercises}
      />
      {/* {selectedExercise && (
        <ExerciseDetails
          selectedExercise={selectedExercise}
          onSelection={handleSelection}
        />
      )} */}
    </div>
  );
}

export default ExercisesPage;
