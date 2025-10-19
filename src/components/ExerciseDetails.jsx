import { useExercises } from "../contexts/ExercisesContext";

function ExerciseDetails() {
  const { selectedExercise, handleSelection } = useExercises();
  return (
    <div>
      <div className="exercise-details backgroundContainer">
        <h2>{selectedExercise.name}</h2>
        <button onClick={handleSelection(selectedExercise)}>X</button>
        <button>History</button>
        <button>Records</button>
        <div>
          <h3>Exercise Difficulty</h3>
          <span>{selectedExercise.difficulty}</span>
        </div>
        <div>
          <h3>Exercise Equipment</h3>
          <span>{selectedExercise.equipment}</span>
        </div>
        <div>
          <h3>Exercise Instructions</h3>
          <span>{selectedExercise.instructions}</span>
        </div>
        <div>
          <h3>Exercise Target Muscle</h3>
          <span>{selectedExercise.muscle}</span>
        </div>
        <div>
          <h3>Exercise Type</h3>
          <span>{selectedExercise.type}</span>
        </div>
      </div>
    </div>
  );
}

export default ExerciseDetails;
