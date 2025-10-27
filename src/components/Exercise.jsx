import { useExercises } from "../contexts/ExercisesContext";

function Exercise({ exercise, children }) {
  const { handleSelection, selectedExercise } = useExercises();
  const isSelected = selectedExercise?.name === exercise.name;

  return (
    <div className="exercise">
      <p>{children}</p>
      <button onClick={() => handleSelection(exercise)}>
        {isSelected ? "Hide details" : "Show details"}
      </button>
    </div>
  );
}

export default Exercise;
