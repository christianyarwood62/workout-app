import { useExercises } from "../contexts/ExercisesContext";

function AddFirstWorkoutButton() {
  const { handleShowNewWorkoutForm } = useExercises();

  return (
    <div className="add-template-button">
      <button className="button" onClick={() => handleShowNewWorkoutForm()}>
        <h3>Create your first template! 🏋️‍♀️</h3>
      </button>
    </div>
  );
}

export default AddFirstWorkoutButton;
