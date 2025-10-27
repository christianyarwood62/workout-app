import { useExercises } from "../contexts/ExercisesContext";

function AddFirstWorkout() {
  const { handleShowNewWorkoutForm } = useExercises();

  return (
    <div className="container">
      <button onClick={() => handleShowNewWorkoutForm()}>
        Add your first workout!
      </button>
    </div>
  );
}

export default AddFirstWorkout;
