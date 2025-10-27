import { useWorkout } from "../contexts/WorkoutContext";

function AddFirstWorkout() {
  const { handleShowNewWorkoutForm } = useWorkout();

  return (
    <div className="container">
      <button onClick={() => handleShowNewWorkoutForm()}>
        Add your first workout!
      </button>
    </div>
  );
}

export default AddFirstWorkout;
