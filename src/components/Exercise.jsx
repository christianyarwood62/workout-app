import { useExercises } from "../contexts/ExercisesContext";

function Exercise({ exercise, children }) {
  const { handleSelection, selectedExercise } = useExercises();
  const isSelected = selectedExercise?.name === exercise.name;

  return (
    <div className="exercise">
      <button className="button" onClick={() => handleSelection(exercise)}>
        <p>{children}</p>
      </button>
    </div>
  );
}

export default Exercise;
