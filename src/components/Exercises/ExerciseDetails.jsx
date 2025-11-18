import { useExercises } from "../../contexts/ExercisesContext";
import Button from "../../UI/Button";
import { X, History, Archive } from "lucide-react";

function ExerciseDetails() {
  const { selectedExercise, handleSelection } = useExercises();
  return (
    <div className="exercise-details-container">
      <h2>{selectedExercise.name}</h2>
      <div className="flex-row gap-small">
        <Button
          className="button-with-icon"
          onClick={() => handleSelection(null)}
        >
          <X className="svg" width="24px" />
          <p>Close</p>
        </Button>
        <Button className="button-with-icon">
          <History className="svg" />
          <p>History</p>
        </Button>
        <Button className="button-with-icon">
          <Archive className="svg" />
          <p>Records</p>
        </Button>
      </div>

      <div>
        <h3>Exercise Difficulty</h3>
        <p>{selectedExercise.difficulty}</p>
      </div>
      <div>
        <h3>Exercise Equipment</h3>
        <p>{selectedExercise.equipment}</p>
      </div>
      <div>
        <h3>Exercise Instructions</h3>
        <p>{selectedExercise.instructions}</p>
      </div>
      <div>
        <h3>Exercise Target Muscle</h3>
        <p>{selectedExercise.muscle}</p>
      </div>
      <div>
        <h3>Exercise Type</h3>
        <p>{selectedExercise.type}</p>
      </div>
    </div>
  );
}

export default ExerciseDetails;
