import { useExercises } from "../contexts/ExercisesContext";

function Exercise({ exercise, children }) {
  const { handleSelection, selectedExercise } = useExercises();
  const isSelected = selectedExercise?.name === exercise.name;

  return (
    <div onClick={() => handleSelection(exercise)} className="exercise">
      <p>{children}</p>
    </div>
  );
}

export default Exercise;
