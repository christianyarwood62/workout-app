import { useWorkout } from "../contexts/WorkoutContext";

function TemplateWorkout() {
  const { handleShowNewWorkoutForm } = useWorkout();

  return (
    <div className="container">
      <button onClick={() => handleShowNewWorkoutForm()}>
        Add a new workout
      </button>
    </div>
  );
}

export default TemplateWorkout;
